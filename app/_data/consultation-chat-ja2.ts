import type { ConsultationStep, ConsultationStepId } from "./consultation-chat";

export const consultationChatJa2 = {
  title: "個別戦略カウンセリング",
  description: "10問・約5分",
  welcome:
    "10個の質問に答えると、無料の個別戦略カウンセリングを申し込めます。お名前、メールアドレス、回答は米山陸への相談対応だけに使用します。",
  contactHref: "/ja/contact#inquiry",
  contactLabel: "質問に答えず、個別相談へ",
  email: "yoneriku19@gmail.com",
  privacyNote:
    "回答は相談への返信にのみ使用し、第三者には共有しません。18歳未満の方は、保護者の同意を得てから送信してください。",
} as const;

export const otherOptionLabelJa2 = "その他";

export const consultationFlowJa2: readonly ConsultationStepId[] = [
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

export const consultationStepsJa2: Record<ConsultationStepId, ConsultationStep> = {
  name: {
    kind: "text",
    prompt: "お名前（フルネーム）を教えてください。",
    summaryLabel: "お名前",
    required: true,
    placeholder: "例：山田 太郎",
    inputType: "text",
  },
  email: {
    kind: "text",
    prompt: "連絡先のメールアドレスを教えてください。",
    summaryLabel: "メールアドレス",
    required: true,
    placeholder: "例：you@example.com",
    inputType: "email",
  },
  schoolStage: {
    kind: "choice",
    prompt: "現在の学年を教えてください。",
    summaryLabel: "学年",
    required: true,
    options: ["Year 10", "Year 11", "Year 12"],
    allowOther: false,
  },
  studyState: {
    kind: "choice",
    prompt: "今の勉強の状況に一番近いものを選んでください。",
    summaryLabel: "現在の勉強の状況",
    required: true,
    options: [
      "何から始めるか分からず、始める前に時間が過ぎてしまう。",
      "課題は締切直前に終わるが、急いだ結果になってしまう。",
      "頑張っているのに点数が伸びず、何を変えればよいか分からない。",
      "慣れた問題は解けるが、出題の形が変わると自信がなくなる。",
      "計画はあるが、より高いATARや競争率の高い進路を目指したい。",
    ],
    allowOther: false,
  },
  classConcern: {
    kind: "choice",
    prompt: "授業や課題で一番難しいと感じることは何ですか？",
    summaryLabel: "授業・課題の悩み",
    required: true,
    options: [
      "授業の進みが速く、内容を一部しか理解できない。",
      "内容は分かるが、採点者が求める形式で答えられない。",
      "エッセイの構成が分からず、白紙の前で時間を失う。",
      "計算はできるが、考え方を文章で説明するのが難しい。",
      "分からないときに質問したり、声を上げたりするのが苦手。",
    ],
    allowOther: true,
  },
  futureConcern: {
    kind: "choice",
    prompt: "卒業後の進路で、今一番不確かなことは何ですか？",
    summaryLabel: "進路の悩み",
    required: true,
    options: [
      "今の成績で希望する大学・専攻に届くか分からない。",
      "選択肢を広げるために、どの科目や前提条件が必要か分からない。",
      "奨学金に興味はあるが、何をいつ準備すればよいか分からない。",
      "自分の得意分野と検討中の進路が、まだ結びついていない。",
      "周りが準備を始めていて、自分は遅れていると感じる。",
    ],
    allowOther: true,
  },
  supportRequest: {
    kind: "choice",
    prompt: "最初に、メンターに何を手伝ってほしいですか？",
    summaryLabel: "最初に相談したいこと",
    required: true,
    options: [
      "遅れている課題を整理し、成績を立て直したい。",
      "課題の意図を理解し、エッセイをより強く書きたい。",
      "週の計画をつくり、実行できるようにしたい。",
      "科目と成績を大学・専攻の選択肢につなげたい。",
      "高校生活を、落ち着いて継続できる形に整えたい。",
    ],
    allowOther: true,
  },
  detail: {
    kind: "textarea",
    prompt: "今心配していることや、具体的に聞きたいことを教えてください。",
    summaryLabel: "具体的な相談内容",
    required: true,
    placeholder: "例：次のEnglish課題で、論点の立て方を改善したいです。",
  },
  schedule: {
    kind: "textarea",
    prompt: "相談できそうな曜日・時間を、タイムゾーン付きで最大3つ教えてください。",
    summaryLabel: "希望日時",
    required: true,
    placeholder: "例：1) 火曜18時 2) 木曜19時 3) 土曜10時（AEST）",
  },
  extra: {
    kind: "textarea",
    prompt: "その他、伝えておきたいことはありますか？（任意）",
    summaryLabel: "追加の相談",
    required: false,
    placeholder: "なければ「スキップ」を選んでください。",
  },
};
