export type ConsultationStepId =
  | "name"
  | "email"
  | "schoolStage"
  | "studyState"
  | "classConcern"
  | "futureConcern"
  | "supportRequest"
  | "detail"
  | "schedule"
  | "extra";

export type ConsultationAnswers = Partial<Record<ConsultationStepId, string>>;

export type ConsultationChoiceStep = {
  readonly kind: "choice";
  readonly prompt: string;
  readonly summaryLabel: string;
  readonly required: boolean;
  readonly options: readonly string[];
  readonly allowOther: boolean;
};

export type ConsultationInputStep = {
  readonly kind: "text" | "textarea";
  readonly prompt: string;
  readonly summaryLabel: string;
  readonly required: boolean;
  readonly placeholder: string;
  readonly inputType?: "text" | "email";
};

export type ConsultationStep = ConsultationChoiceStep | ConsultationInputStep;

export const consultationChat = {
  title: "Academic planning consultation",
  description: "10 questions · about 5 minutes",
  welcome:
    "Answer 10 short questions to request a free academic planning consultation. Your name, email, and answers will be sent only to Riku Yoneyama.",
  contactHref: "/contact#inquiry",
  contactLabel: "Skip the questions and contact Riku",
  email: "yoneriku19@gmail.com",
  privacyNote:
    "Your answers are used only to respond to your consultation request and are not shared with anyone else. Students under 18 should get a parent or guardian's consent before sending.",
} as const;

export const consultationFlow: readonly ConsultationStepId[] = [
  "name",
  "email",
  "schoolStage",
  "studyState",
  "classConcern",
  "futureConcern",
  "supportRequest",
  "detail",
  "schedule",
  "extra",
];

export const otherOptionLabel = "Other";

export const consultationSteps: Record<ConsultationStepId, ConsultationStep> = {
  name: {
    kind: "text",
    prompt: "What is your full name?",
    summaryLabel: "Name",
    required: true,
    placeholder: "e.g. Alex Taylor",
    inputType: "text",
  },
  email: {
    kind: "text",
    prompt: "What email address should we use to contact you?",
    summaryLabel: "Email",
    required: true,
    placeholder: "e.g. you@example.com",
    inputType: "email",
  },
  schoolStage: {
    kind: "choice",
    prompt: "Which year level are you currently in?",
    summaryLabel: "Year level",
    required: true,
    options: ["Year 10", "Year 11", "Year 12"],
    allowOther: false,
  },
  studyState: {
    kind: "choice",
    prompt: "Which description is closest to your current study situation?",
    summaryLabel: "Current study situation",
    required: true,
    options: [
      "I do not know what to start with, so I lose time before I even begin.",
      "I finish assignments close to the deadline, but the result feels rushed.",
      "I work hard but my marks plateau and I cannot see how to move higher.",
      "I do well in familiar topics but lose confidence when the questions change.",
      "I have a plan, but I want to aim for a stronger ATAR or a more competitive course.",
    ],
    allowOther: false,
  },
  classConcern: {
    kind: "choice",
    prompt: "What is the biggest difficulty in your classes or assessments?",
    summaryLabel: "Class or assessment difficulty",
    required: true,
    options: [
      "The pace is fast and I understand only part of the content.",
      "I understand the topic but do not know how to answer in the format the marker wants.",
      "I do not know how to structure an essay, so I lose time staring at a blank page.",
      "I can calculate an answer but struggle to explain my reasoning in words.",
      "I find it difficult to ask questions or speak up when I am unsure.",
    ],
    allowOther: true,
  },
  futureConcern: {
    kind: "choice",
    prompt: "What feels most uncertain about life after school?",
    summaryLabel: "Future concern",
    required: true,
    options: [
      "I do not know whether my current marks are enough for my preferred course.",
      "I am unsure which subjects and prerequisites keep my options open.",
      "I am interested in scholarships but do not know what to prepare or when.",
      "My strengths and the courses I am considering do not seem to line up yet.",
      "Other students have started preparing and I feel behind.",
    ],
    allowOther: true,
  },
  supportRequest: {
    kind: "choice",
    prompt: "What would you most like a mentor to help you do first?",
    summaryLabel: "What you want help with",
    required: true,
    options: [
      "Recover from missed work and rebuild my results.",
      "Understand what an assignment is asking and write stronger essays.",
      "Create a weekly plan and stay accountable to it.",
      "Connect my subject choices and marks to university options.",
      "Build a calmer, more consistent approach to senior school.",
    ],
    allowOther: true,
  },
  detail: {
    kind: "textarea",
    prompt: "Tell us anything specific you are currently worried about or would like to ask.",
    summaryLabel: "Specific concern",
    required: true,
    placeholder: "e.g. I want to improve my Year 12 English essays before the next assessment.",
  },
  schedule: {
    kind: "textarea",
    prompt: "What days and times would suit a consultation? Please include up to three options and your time zone.",
    summaryLabel: "Preferred times",
    required: true,
    placeholder: "e.g. 1) Tuesday 6pm 2) Thursday 7pm 3) Saturday 10am (AEST)",
  },
  extra: {
    kind: "textarea",
    prompt: "Anything else you would like us to know? (Optional)",
    summaryLabel: "Additional question",
    required: false,
    placeholder: "If not, choose Skip to continue.",
  },
};
