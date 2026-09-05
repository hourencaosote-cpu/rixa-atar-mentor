"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  consultationChat,
  consultationFlow,
  consultationSteps,
  otherOptionLabel,
  type ConsultationAnswers,
  type ConsultationStepId,
} from "../_data/consultation-chat";
import {
  consultationChatJa2,
  consultationFlowJa2,
  consultationStepsJa2,
  otherOptionLabelJa2,
} from "../_data/consultation-chat-ja2";
import { findApprovedConsultationGuide } from "../_data/consultation-chat-knowledge";
import { BrandMark } from "./BrandMark";

function buildConsultationEmail(
  answers: ConsultationAnswers,
  flow: readonly ConsultationStepId[],
  steps: Record<ConsultationStepId, { summaryLabel: string }>,
  chat: { email: string },
  isJapanese2: boolean,
) {
  const subject = isJapanese2
    ? `個別戦略カウンセリングの相談 — ${answers.name ?? ""}`
    : `Free consultation request — ${answers.name ?? ""}`;
  const body = [
    isJapanese2 ? "こんにちは、陸さん。" : "Hello Riku,",
    "",
    isJapanese2
      ? "個別戦略カウンセリングを申し込みたいです。"
      : "I would like to request an academic planning consultation.",
    "",
    ...flow.flatMap((step) => [
      `${steps[step].summaryLabel}:`,
      answers[step] ?? (isJapanese2 ? "未回答" : "Not answered"),
      "",
    ]),
  ].join("\n");
  return `mailto:${chat.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ConsultationChat() {
  const pathname = usePathname();
  const isJapanese2 = pathname?.startsWith("/ja") ?? false;
  return <ConsultationChatForm key={isJapanese2 ? "ja2" : "en"} isJapanese2={isJapanese2} />;
}

function ConsultationChatForm({ isJapanese2 }: { isJapanese2: boolean }) {
  const chatCopy = isJapanese2 ? consultationChatJa2 : consultationChat;
  const flow = isJapanese2 ? consultationFlowJa2 : consultationFlow;
  const steps = isJapanese2 ? consultationStepsJa2 : consultationSteps;
  const otherLabel = isJapanese2 ? otherOptionLabelJa2 : otherOptionLabel;
  const ui = isJapanese2
    ? {
        identity: "無料・1対1",
        close: "相談フォームを閉じる",
        progress: "相談の進捗",
        ready: "内容を確認する",
        planning: "相談チャット",
        answer: "あなたの回答",
        choose: "回答を選択",
        other: "（自由入力）",
        write: "ここに回答を入力してください。",
        backToChoices: "選択肢に戻る",
        skip: "スキップ",
        next: "次へ",
        back: "← 戻る",
        readyKicker: "送信前の確認",
        review: "相談内容を確認",
        notAnswered: "未回答",
        relevant: "最初に役立つヒント",
        send: "メールで送信",
        restart: "最初からやり直す",
        emailNote: "メールアプリが開きます。送信前に補足を加えられます。",
      }
    : {
        identity: "FREE · ONE-TO-ONE",
        close: "Close consultation form",
        progress: "Consultation progress",
        ready: "Ready to review",
        planning: "PLANNING CHAT",
        answer: "YOUR ANSWER",
        choose: "Choose an answer",
        other: "(write your own)",
        write: "Write your answer here.",
        backToChoices: "Back to choices",
        skip: "Skip",
        next: "Next",
        back: "← Go back",
        readyKicker: "READY TO SEND",
        review: "Review your message",
        notAnswered: "Not answered",
        relevant: "A relevant starting point",
        send: "Send this by email",
        restart: "Start again",
        emailNote: "Your email app will open. You can add context before sending.",
      };

  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<ConsultationAnswers>({});
  const [draft, setDraft] = useState("");
  const [isWritingOther, setIsWritingOther] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isComplete = currentStep >= flow.length;
  const activeStepId = flow[currentStep] as ConsultationStepId | undefined;
  const activeStep = activeStepId ? steps[activeStepId] : undefined;
  const guidance = isJapanese2
    ? undefined
    : findApprovedConsultationGuide(answers.supportRequest);

  useEffect(() => {
    if (!isOpen) return;
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 220);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentStep, isOpen]);

  const advance = (step: ConsultationStepId, value: string) => {
    setAnswers((current) => ({ ...current, [step]: value }));
    setDraft("");
    setIsWritingOther(false);
    setCurrentStep((current) => current + 1);
  };

  const goBack = () => {
    setDraft("");
    setIsWritingOther(false);
    setCurrentStep((current) => Math.max(0, current - 1));
  };

  const restart = () => {
    setAnswers({});
    setDraft("");
    setIsWritingOther(false);
    setCurrentStep(0);
  };

  const submitDraft = () => {
    if (!activeStepId || !activeStep) return;
    const value = draft.trim();
    if (!value) {
      if (activeStep.required || isWritingOther) return;
      advance(activeStepId, isJapanese2 ? "特になし" : "Nothing specific");
      return;
    }
    advance(activeStepId, isWritingOther ? `${otherLabel}: ${value}` : value);
  };

  const renderStepInput = () => {
    if (!activeStepId || !activeStep) return null;
    if (activeStep.kind === "choice" && !isWritingOther) {
      return (
        <div className="consultation-options" aria-label={ui.choose}>
          {activeStep.options.map((option) => (
            <button type="button" key={option} onClick={() => advance(activeStepId, option)}>
              {option}
            </button>
          ))}
          {activeStep.allowOther && (
            <button type="button" onClick={() => setIsWritingOther(true)}>
              {otherLabel} {ui.other}
            </button>
          )}
        </div>
      );
    }
    const isTextarea = activeStep.kind === "textarea" || isWritingOther;
    const placeholder = isWritingOther
      ? ui.write
      : activeStep.kind === "choice"
        ? ""
        : activeStep.placeholder;
    return (
      <form
        className="consultation-step-form"
        onSubmit={(event) => {
          event.preventDefault();
          submitDraft();
        }}
      >
        <label htmlFor="consultation-step-input">{activeStep.prompt}</label>
        {isTextarea ? (
          <textarea
            id="consultation-step-input"
            value={draft}
            rows={3}
            placeholder={placeholder}
            onChange={(event) => setDraft(event.target.value)}
          />
        ) : (
          <input
            id="consultation-step-input"
            type={activeStep.kind === "text" ? (activeStep.inputType ?? "text") : "text"}
            value={draft}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                submitDraft();
              }
            }}
            placeholder={placeholder}
            autoComplete={activeStepId === "name" ? "name" : activeStepId === "email" ? "email" : "off"}
            onChange={(event) => setDraft(event.target.value)}
          />
        )}
        <div className="consultation-step-actions">
          {isWritingOther && (
            <button type="button" className="consultation-step-secondary" onClick={() => { setIsWritingOther(false); setDraft(""); }}>
              {ui.backToChoices}
            </button>
          )}
          {!activeStep.required && !isWritingOther && (
            <button type="button" className="consultation-step-secondary" onClick={() => advance(activeStepId, isJapanese2 ? "特になし" : "Nothing specific")}>
              {ui.skip}
            </button>
          )}
          <button type="submit" className="consultation-step-next" disabled={!draft.trim()}>
            {ui.next}
          </button>
        </div>
      </form>
    );
  };

  return (
    <aside className={`consultation-chat${isOpen ? " is-open" : ""}`}>
      <section
        id="consultation-chat-panel"
        className="consultation-chat-panel"
        role="dialog"
        aria-modal="false"
        aria-labelledby="consultation-chat-title"
        aria-hidden={!isOpen}
      >
        <header className="consultation-chat-header">
          <div className="consultation-chat-identity">
            <BrandMark inverse />
            <div>
              <span>{ui.identity}</span>
              <strong id="consultation-chat-title">{chatCopy.title}</strong>
            </div>
          </div>
          <button ref={closeRef} type="button" className="consultation-chat-close" aria-label={ui.close} onClick={() => setIsOpen(false)}>×</button>
        </header>
        <div className="consultation-chat-progress" aria-label={ui.progress}>
          <span>{isComplete ? ui.ready : `${isJapanese2 ? "質問" : "Question"} ${currentStep + 1} / ${flow.length}`}</span>
          <i aria-hidden="true"><b style={{ width: `${isComplete ? 100 : (currentStep / flow.length) * 100}%` }} /></i>
        </div>
        <div className="consultation-chat-messages" aria-live="polite">
          <div className="consultation-message consultation-message-assistant">
            <span>{ui.planning}</span>
            <p>{chatCopy.welcome}</p>
          </div>
          {flow.slice(0, currentStep).map((step) => (
            <div className="consultation-exchange" key={step}>
              <div className="consultation-message consultation-message-assistant"><span>{ui.planning}</span><p>{steps[step].prompt}</p></div>
              <div className="consultation-message consultation-message-user"><span>{ui.answer}</span><p>{answers[step]}</p></div>
            </div>
          ))}
          {!isComplete && activeStep && (
            <div className="consultation-current-step">
              <div className="consultation-message consultation-message-assistant"><span>{ui.planning}</span><p>{activeStep.prompt}</p></div>
              {renderStepInput()}
              {currentStep > 0 && <button type="button" className="consultation-step-back" onClick={goBack}>{ui.back}</button>}
            </div>
          )}
          {isComplete && (
            <section className="consultation-summary" aria-labelledby="consultation-summary-title">
              <p className="consultation-summary-kicker">{ui.readyKicker}</p>
              <h3 id="consultation-summary-title">{ui.review}</h3>
              <dl>{flow.map((step) => <div key={step}><dt>{steps[step].summaryLabel}</dt><dd>{answers[step] ?? ui.notAnswered}</dd></div>)}</dl>
              {guidance && <div className="consultation-summary-guidance"><strong>{ui.relevant}</strong><p>{guidance}</p></div>}
              <a className="consultation-summary-cta" href={buildConsultationEmail(answers, flow, steps, chatCopy, isJapanese2)}>{ui.send} <span aria-hidden="true">↗</span></a>
              <button type="button" className="consultation-restart" onClick={restart}>{ui.restart}</button>
              <small>{ui.emailNote} {chatCopy.privacyNote}</small>
            </section>
          )}
          <div ref={messagesEndRef} />
        </div>
        {!isComplete && <footer className="consultation-chat-compose"><div className="consultation-chat-footer"><a href={chatCopy.contactHref}>{chatCopy.contactLabel}</a><p>{chatCopy.privacyNote}</p></div></footer>}
      </section>
      <button type="button" className="consultation-chat-trigger" aria-expanded={isOpen} aria-controls="consultation-chat-panel" onClick={() => setIsOpen((current) => !current)}>
        <span className="consultation-trigger-status" aria-hidden="true" />
        <span><strong>{chatCopy.title}</strong><small>{chatCopy.description}</small></span>
        <i aria-hidden="true">{isOpen ? "×" : "↗"}</i>
      </button>
    </aside>
  );
}
