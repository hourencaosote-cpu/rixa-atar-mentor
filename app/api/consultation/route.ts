import {
  consultationChat,
  consultationFlow,
  consultationSteps,
  type ConsultationAnswers,
  type ConsultationStepId,
} from "../../_data/consultation-chat";

export const maxDuration = 30;

const MAX_BODY_SIZE = 24_000;
const MAX_FIELD_LENGTH = 2_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_REQUESTS = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requestBuckets = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientId =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local";
  const now = Date.now();
  const current = requestBuckets.get(clientId);

  if (!current || current.resetAt <= now) {
    requestBuckets.set(clientId, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_REQUESTS;
}

function readAnswers(raw: unknown) {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const source = raw as Record<string, unknown>;
  const answers: ConsultationAnswers = {};

  for (const step of consultationFlow) {
    const value = source[step];

    if (value === undefined || value === null || value === "") {
      if (consultationSteps[step].required) {
        return null;
      }
      continue;
    }

    if (typeof value !== "string" || value.length > MAX_FIELD_LENGTH) {
      return null;
    }

    const trimmed = value.trim();
    if (!trimmed && consultationSteps[step].required) {
      return null;
    }

    answers[step] = trimmed;
  }

  if (!answers.email || !EMAIL_PATTERN.test(answers.email)) {
    return null;
  }

  return answers;
}

function buildMailText(answers: ConsultationAnswers) {
  const lines = ["個別戦略カウンセリングの申し込みが届きました。", ""];

  for (const step of consultationFlow) {
    const { summaryLabel } = consultationSteps[step];
    lines.push(`【${summaryLabel}】`, answers[step] ?? "（未回答）", "");
  }

  lines.push("---", "サイトの事前相談フォームから自動送信されました。");
  return lines.join("\n");
}

async function deliver(answers: ConsultationAnswers, text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONSULTATION_INBOX ?? consultationChat.email;

  if (!apiKey) {
    console.info(
      `[consultation] メール送信は未設定です（RESEND_API_KEY 未設定）。宛先: ${inbox}\n${text}`,
    );
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONSULTATION_FROM ?? "onboarding@resend.dev",
      to: [inbox],
      reply_to: answers.email,
      subject: `【カウンセリング申込】${answers.name ?? "お名前未記入"}様（${answers.schoolStage ?? "学年未回答"}）`,
      text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend responded with ${response.status}`);
  }

  return true;
}

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_SIZE) {
    return Response.json({ error: "Request too large" }, { status: 413 });
  }

  if (isRateLimited(request)) {
    return Response.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  let body: { answers?: unknown; company?: unknown };
  try {
    body = (await request.json()) as { answers?: unknown; company?: unknown };
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // ハニーポット: 通常の利用者には見えない項目が埋まっていれば破棄します。
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true, delivered: true });
  }

  const answers = readAnswers(body.answers);
  if (!answers) {
    return Response.json({ error: "Invalid answers" }, { status: 400 });
  }

  const text = buildMailText(answers);

  try {
    const delivered = await deliver(answers, text);
    return Response.json({ ok: true, delivered });
  } catch {
    return Response.json({ error: "Delivery failed" }, { status: 502 });
  }
}

export type ConsultationRequestBody = {
  answers: Partial<Record<ConsultationStepId, string>>;
  company?: string;
};
