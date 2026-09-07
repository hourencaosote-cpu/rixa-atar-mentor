/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ContactBandJa2,
  PageHeroJa2,
  SiteFooterJa2,
  SiteHeaderJa2,
} from "../_components/SiteChromeJa2";

export const metadata: Metadata = {
  title: "RIXA｜ATAR・学習メンタリング",
  description:
    "オーストラリアの高校生向け。ATAR科目、課題、エッセイ、進路を一つの学習計画につなげる日本語サポート。",
};

const subjects = [
  {
    category: "MATHEMATICS",
    title: "数学",
    subjects: "General Mathematics / Mathematical Methods / Specialist Mathematics",
    detail: "解き方だけでなく、途中式や理由を明確に説明する答案づくりまで整理します。",
    image: "/scenes/subject-math.jpg",
  },
  {
    category: "SCIENCE",
    title: "理科",
    subjects: "Biology / Chemistry / Physics",
    detail: "用語、実験、データを採点基準に沿った短い記述へつなげます。",
    image: "/scenes/subject-science.jpg",
  },
  {
    category: "ENGLISH & HUMANITIES",
    title: "英語・人文",
    subjects: "English / Literature / EAL / History",
    detail: "問いを論点に変え、根拠と分析で読み手に伝わるエッセイを組み立てます。",
    image: "/scenes/subject-language.jpg",
  },
  {
    category: "BUSINESS & SOCIAL SCIENCE",
    title: "ビジネス・社会科学",
    subjects: "Business / Economics / Legal Studies",
    detail: "定義、具体例、評価を結び、暗記だけではない答案を目指します。",
    image: "/scenes/subject-business.jpg",
  },
] as const;

const ringArcs = [
  "M 116.14 22.21 A 88 88 0 0 1 197.79 103.86",
  "M 197.79 116.14 A 88 88 0 0 1 116.14 197.79",
  "M 103.86 197.79 A 88 88 0 0 1 22.21 116.14",
  "M 22.21 103.86 A 88 88 0 0 1 103.86 22.21",
];

const concerns = [
  ["01", "ATARの勉強で迷う", "どの課題と科目から手をつけるべきか、優先順位を整理できない。"],
  ["02", "進路を一人で決めきれない", "大学、専攻、奨学金、出願準備をどの順番で考えるか分からない。"],
  ["03", "勉強と生活が両立しない", "環境や時差が変わっても、学習習慣とモチベーションを保ちたい。"],
] as const;

const paths = [
  ["01", "SUPPORT", "学習・進路・生活をつなぐ", "ATAR科目、課題、エッセイ、将来の進路を一つの実行計画にまとめます。", "/ja/support", "サポート内容を見る", "/scenes/support.jpg"],
  ["02", "STORY", "なぜこのメンタリングをするのか", "Year 11で行き詰まった経験から、学び方を組み直した過程を共有します。", "/ja/story", "ストーリーを読む", "/scenes/story.jpg"],
  ["03", "RESULTS", "経験を裏づける実績", "2023年の5大学への出願結果と奨学金オファーを、背景とともに掲載しています。", "/ja/results", "実績を見る", "/scenes/results.jpg"],
] as const;

const plans = [
  {
    id: "essentials",
    name: "Essentials",
    subtitle: "基本サポート",
    price: "$250",
    cadence: "週1回・60分（毎月4回）",
    lead: "学習の優先順位を決め、毎週の課題を着実に進めるプラン。",
    features: ["ATAR科目の授業・課題サポート", "科目ごとの学習計画", "エッセイの構成・論点フィードバック", "メールまたはチャットでの確認"],
  },
  {
    id: "mentor",
    name: "Mentor",
    subtitle: "上位サポート",
    price: "$450",
    cadence: "週1回・120分（毎月4回）",
    lead: "授業、課題、進路、生活まで一緒に見渡す継続メンタリング。",
    features: ["ATAR科目の授業・課題サポート", "評価基準から逆算した個別ロードマップ", "エッセイの下書き・推敲・根拠の使い方", "週の途中の進捗確認と進路設計", "120分の授業は途中に10分休憩"],
  },
] as const;

const supportAreas = [
  ["01", "学習戦略", "点数につながる学び方", "評価基準を読み、今週やることを具体的な行動に落とします。", ["ATAR科目", "課題の優先順位", "週次レビュー"]],
  ["02", "進路設計", "選択肢を比較できる状態へ", "大学・専攻・奨学金を期限と条件から整理します。", ["大学選び", "出願準備", "奨学金"]],
  ["03", "エッセイ", "伝わる論理を組み立てる", "イントロ、本文、結論、根拠、分析を問いに合わせて磨きます。", ["構成", "論点", "エビデンス"]],
] as const;

const methods = [
  ["01", "目標を決める", "ATAR目標と直近の評価課題を確認し、期限から逆算します。"],
  ["02", "行動へ分解する", "週・日のタスクまで小さくし、何から始めるかを迷わない状態にします。"],
  ["03", "理解を確かめる", "暗記で終わらせず、自分の言葉で説明できるかを確認します。"],
  ["04", "振り返って改善する", "毎週の進捗を見て、次の計画と学習方法を調整します。"],
] as const;

const essaySteps = [
  ["01", "問いを分解", "設問の動詞と条件を確認し、答えるべき小さな課題に変えます。"],
  ["02", "主張を決める", "イントロで示す立場を一文にし、各段落の役割を決めます。"],
  ["03", "根拠をつなぐ", "引用やデータを、説明・分析・問いへのつながりまで書きます。"],
  ["04", "推敲する", "論理の流れ、エビデンスの使い方、結論の一貫性を確認します。"],
] as const;

const universities = [
  ["University of Melbourne", "/universities/melbourne.jpg", "QS世界ランキング33位・Bachelor of Commerce・奨学金総額AUD $45,000"],
  ["University of Auckland", "/universities/auckland.jpg", "QS世界ランキング68位・Business / Science選択可能・授業料全額免除"],
  ["Victoria University of Wellington", "/universities/wellington.jpg", "ニュージーランド首都の名門・Commerce / Law選択可能"],
  ["University of Adelaide", "/universities/adelaide.jpg", "QS世界ランキング89位・Business / Economics・Merit-based Scholarship"],
  ["Massey University", "/universities/massey.jpg", "ニュージーランド最大規模・Business / Applied Science・International Excellence Award"],
] as const;

const steps = [
  ["01", "初回相談（無料）", "現在地、課題、目標を約30分で確認します。"],
  ["02", "プラン設計", "科目、頻度、サポート範囲を個別に組み立てます。"],
  ["03", "試行期間（無料）", "実際の授業と学習計画を試し、相性と効果を確認します。"],
  ["04", "継続サポート", "合意した計画を週次で見直し、必要に応じて改善します。"],
] as const;

function Japanese2Home() {
  return (
    <>
      <SiteHeaderJa2 current="/" />
      <main>
        <section className="home-hero" aria-labelledby="ja2-hero-title">
          <div className="section-shell home-hero-grid">
            <div className="hero-copy motion-in">
              <p className="eyebrow">ATAR・ACADEMIC MENTOR</p>
              <h1 id="ja2-hero-title"><span className="hero-line">迷いを整理して、</span><br className="hero-break" /> <span className="hero-line"><em>次の一歩へ。</em></span></h1>
              <p className="hero-lead">オーストラリアの高校生向けに、ATAR科目、課題、エッセイ、大学進学を一つの学習計画につなげます。</p>
              <div className="hero-actions"><a className="button button-primary" href="/ja/contact#inquiry">無料相談を申し込む <span aria-hidden="true">↗</span></a><a className="text-link" href="/ja/support">サポート内容を見る <span aria-hidden="true">→</span></a></div>
              <p className="hero-note">オンライン個別サポート / 日本語 / <span>初回相談 約30分</span></p>
            </div>
            <aside className="portrait-card motion-in" aria-label="メンタープロフィール"><div className="portrait-compact" role="img" aria-label="ATAR・学習メンター 米山陸" /><div className="portrait-meta"><div><strong>米山 陸</strong><span>Riku Yoneyama</span></div><p>University of Melbourne<br />Bachelor of Commerce</p><a href="/ja/story">プロフィールを見る →</a></div></aside>
          </div>
        </section>

        <section className="subject-overview" aria-labelledby="ja2-subjects-title"><div className="section-shell"><div className="subject-overview-head"><div><p className="eyebrow">SUBJECTS AT A GLANCE</p><h2 id="ja2-subjects-title">対応科目を、ひと目で。</h2></div><p>1科目から複数科目まで、現在地・学校の予定・目標に合わせてサポートを組み立てます。</p></div><div className="subject-ring" data-subject-ring><div className="subject-ring-bg" aria-hidden="true">{subjects.map((area) => <img key={area.category} src={area.image} alt="" loading="lazy" data-ring-image />)}</div><div className="subject-ring-copy">{subjects.map((area) => <article className="subject-ring-panel" data-ring-panel key={area.category}><p className="eyebrow">{area.category}</p><h3>{area.title}</h3><p className="subject-ring-subjects">{area.subjects}</p><p className="subject-ring-detail">{area.detail}</p></article>)}</div><div className="subject-ring-visual"><div className="subject-ring-wrap"><svg viewBox="0 0 220 220" aria-hidden="true">{ringArcs.map((path) => <path key={path} d={path} data-ring-arc />)}</svg><span className="subject-ring-center" aria-hidden="true">ATAR 科目</span></div><div className="subject-ring-nav" aria-label="科目を選択">{subjects.map((area) => <button type="button" className="subject-ring-label" data-ring-label key={area.category} aria-label={`${area.title}の詳細を見る`}><span className="subject-ring-label-meta">{area.category}</span><strong>{area.title}</strong></button>)}</div></div></div><div className="subject-overview-grid">{subjects.map((area) => <article key={area.category}><span>{area.category}</span><h3>{area.title}</h3><p>{area.subjects}</p></article>)}</div><div className="subject-overview-footer"><p>学年・Level・課題内容は、初回相談で確認します。</p><a className="text-link" href="/ja/support#program-examples">科目の組み合わせ例を見る <span aria-hidden="true">→</span></a></div></div></section>

        <section className="proof-strip" aria-label="本人の2023年出願実績"><div className="section-shell proof-grid"><div className="proof-intro"><span>PERSONAL RECORD</span><p>本人の2023年出願</p></div><div className="proof-item"><strong>5 / 5</strong><span>出願した5大学すべてに合格</span></div><div className="proof-item"><strong>5</strong><span>全大学から奨学金オファー</span></div><div className="proof-item proof-item-wide"><strong>Melbourne</strong><span>現在、メルボルン大学で学習</span></div></div></section>

        <section className="section concerns-section" aria-labelledby="ja2-concerns-title"><div className="section-shell"><div className="section-head"><p className="eyebrow">START FROM HERE</p><h2 id="ja2-concerns-title">「何をすればいいか分からない」状態から始められます。</h2><p>情報を増やす前に、現在地と優先順位を整理します。共通の正解ではなく、その人の次の一手から考えます。</p></div><div className="concern-grid">{concerns.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="section path-section" aria-labelledby="ja2-path-title"><div className="section-shell"><div className="section-head compact-head"><p className="eyebrow">EXPLORE</p><h2 id="ja2-path-title">知りたいことから、お選びください。</h2></div><div className="path-grid">{paths.map(([number, label, title, text, href, link, image]) => <a className="path-card" href={href} key={number}><span className="path-card-media" aria-hidden="true"><img src={image} alt="" loading="lazy" /></span><div className="path-card-top"><span>{number}</span><small>{label}</small></div><h3>{title}</h3><p>{text}</p><strong>{link}<span aria-hidden="true">↗</span></strong></a>)}</div></div></section>

        <section className="story-preview"><div className="section-shell story-preview-grid"><div><p className="eyebrow light">MY STORY</p><p className="story-kicker">Year 11。完全に行き詰まる。</p></div><div><h2>頑張り方ではなく、学び続けられる仕組みを変えました。</h2><p>30件のNot Achievedを記録し、英語も進路も見えなかった時期から、評価基準・目標管理・週次レビューを一つずつ理解しました。</p><a className="button button-outline-light" href="/ja/story">経験と指導への考え方 <span aria-hidden="true">→</span></a></div></div></section>

        <section className="section result-preview" aria-labelledby="ja2-result-title"><div className="section-shell result-preview-grid"><div><p className="eyebrow">PERSONAL RESULTS</p><h2 id="ja2-result-title">実績は、約束ではなく経験の根拠として。</h2></div><div className="result-preview-copy"><p>5大学へ出願し、すべてから合格と奨学金オファーを受け取りました。本人の結果と、これからサポートする生徒の成果は分けて掲載しています。</p><div className="result-preview-list" aria-label="主な合格大学"><span>University of Melbourne</span><span>University of Auckland</span><span>Victoria University of Wellington</span></div><a className="text-link" href="/ja/results">5大学の実績を見る <span aria-hidden="true">→</span></a></div></div></section>

        <section className="home-plan-preview" aria-labelledby="ja2-plan-title"><div className="section-shell home-plan-grid"><div><p className="eyebrow light">PLANS &amp; PRICING</p><h2 id="ja2-plan-title">必要な伴走の深さに合わせた2つのプラン。</h2><a className="button button-outline-light" href="/ja/plans">料金プランを見る <span aria-hidden="true">→</span></a></div><div className="home-plan-list">{plans.map((plan) => <a href={`/ja/plans#${plan.id}`} key={plan.id}><div><span>{plan.name}</span><strong>{plan.subtitle}</strong></div><p>{plan.cadence}</p><p>Monthly <strong>{plan.price}</strong></p><i aria-hidden="true">→</i></a>)}</div></div></section>
        <ContactBandJa2 />
      </main>
      <SiteFooterJa2 />
    </>
  );
}

function Japanese2Support() {
  return <><SiteHeaderJa2 current="/support" /><main><PageHeroJa2 eyebrow="SUPPORT" currentLabel="サポート" title={<><span className="page-title-line">科目だけでなく、</span><br className="display-break" /> <span className="page-title-line"><em>進む道筋</em></span>も。</>} lead="成績、進路、留学生活はつながっています。目標から逆算し、毎日の勉強・課題・出願準備を一つの計画にします。" /><section className="section audience-section"><div className="section-shell audience-grid"><div className="section-head sticky-head"><p className="eyebrow">FOR WHOM</p><h2>次に何をすべきか、明確にしたい人へ。</h2><p>状況を聞いてから、必要なサポートだけを組み合わせます。</p></div><ul className="audience-list"><li><span>01</span><p>ATARの要件、科目、評価基準を理解したい。</p></li><li><span>02</span><p>大学・専攻・奨学金を現実的な計画で比較したい。</p></li><li><span>03</span><p>計画が崩れたあと、学習習慣を立て直したい。</p></li><li><span>04</span><p>国や教育制度をまたいだ経験をもつ人に相談したい。</p></li></ul></div></section><section className="support-pillars"><div className="section-shell"><div className="section-head light-head"><p className="eyebrow light">THREE PILLARS</p><h2>必要な領域を組み合わせます。</h2></div><div className="pillar-grid">{supportAreas.map(([number, label, lead, text, tags]) => <article key={number}><span className="pillar-number">{number}</span><p className="pillar-label">{label}</p><h3>{lead}</h3><p>{text}</p><ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div></div></section><section className="section method-section"><div className="section-shell method-layout"><div className="method-title"><p className="eyebrow">THE METHOD</p><h2>才能ではなく、<em>続けられる仕組み</em>で進む。</h2><p>目標、行動、理解、振り返りを見える状態にします。</p></div><ol className="method-list">{methods.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section><section className="scope-section"><div className="section-shell"><div className="section-head light-head compact-head"><p className="eyebrow light">SCOPE</p><h2>対応科目と進路設計</h2></div><div className="scope-subject-board"><div className="scope-subject-intro"><h3>ATAR科目</h3><p>1科目でも複数科目でも大丈夫です。正確な科目・学校要件は最初に確認します。</p></div><div className="scope-subject-groups">{subjects.map((area) => <article key={area.category}><span>{area.title}</span><p>{area.subjects}</p></article>)}</div><small>学年・Level・課題内容は、初回相談で確認します。</small></div></div></section><section className="section essay-section" id="essay-framework"><div className="section-shell essay-layout"><div className="section-head sticky-head"><p className="eyebrow">ESSAY FRAMEWORK</p><h2>読み手が追える論証として、エッセイを書く。</h2><p>文章の添削だけでなく、問いを主張・根拠・分析・結論へ変える型を身につけます。</p></div><ol className="essay-framework-list">{essaySteps.map(([number, title, text]) => <li key={number}><div className="essay-step-index"><span>{number}</span><i /></div><div><p className="essay-step-label">STEP {number}</p><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section><section className="section program-examples" id="program-examples"><div className="section-shell"><div className="section-head"><div><p className="eyebrow">PROGRAM EXAMPLES</p><h2>計画の組み合わせ例</h2></div><p>固定コースではありません。強み、課題、学校の日程、進路に合わせて調整します。</p></div><div className="program-example-grid"><article><span>01</span><p>数学 + 学習習慣</p><h3>解法と説明を毎週そろえる</h3><small>課題の優先順位、途中式、復習のリズムを組み立てます。</small></article><article><span>02</span><p>英語 + エッセイ</p><h3>問いから結論までを一貫させる</h3><small>論点、段落構成、エビデンス、推敲を一緒に確認します。</small></article><article><span>03</span><p>科目 + 進路</p><h3>現在の選択を将来につなげる</h3><small>大学・専攻・奨学金の条件から、今学期の行動を決めます。</small></article></div></div></section><section className="section boundaries"><div className="section-shell boundary-grid"><div><p className="eyebrow">A CLEAR PROMISE</p><h2>できること、できないこと。</h2></div><div className="boundary-columns"><article><span>DO</span><h3>考えることと準備を支える</h3><p>現在地を整理し、選択肢を比較して、実行できる計画にします。</p></article><article><span>DON&apos;T</span><h3>保証したり、代わりに書いたりしない</h3><p>ATAR、合格、奨学金を保証しません。課題や出願書類を本人に代わって作成することもありません。</p></article></div></div></section><ContactBandJa2 /></main><SiteFooterJa2 /></>;
}

function Japanese2Plans() {
  return <><SiteHeaderJa2 current="/plans" /><main><PageHeroJa2 eyebrow="PLANS & PRICING" currentLabel="料金プラン" title={<>必要な伴走の深さを選ぶ。<br className="display-break" /> <em>2つの月額プラン。</em></>} lead="どちらもATAR科目と科目ごとの学習計画に対応します。違いは、授業の外で行う計画・添削・進捗確認の深さです。" /><section className="section plan-section"><div className="section-shell"><div className="section-head plan-head"><div><p className="eyebrow">MONTHLY PLANS</p><h2>料金とサポート内容</h2></div><p>オンラインで実施します。科目、学校の日程、優先順位は初回相談で確認します。</p></div><div className="plan-grid">{plans.map((plan, index) => <article className={plan.id === "mentor" ? "featured-plan" : ""} id={plan.id} key={plan.id}><div className="plan-topline"><span>{String(index + 1).padStart(2, "0")}</span>{plan.id === "mentor" && <small>DEEP SUPPORT</small>}</div><p className="plan-en">{plan.name}</p><h3>{plan.subtitle}</h3><div className="plan-price"><span>Monthly</span><strong>{plan.price}</strong></div><p className="plan-cadence">{plan.cadence}・オンライン</p><p className="plan-lead">{plan.lead}</p><ul>{plan.features.map((feature) => <li key={feature}><i aria-hidden="true">✓</i><span>{feature}</span></li>)}</ul><a className="button button-primary" href="/ja/contact#inquiry">このプランについて相談 <span aria-hidden="true">↗</span></a></article>)}</div><div className="price-notes"><p>価格はオーストラリアドルです。支払い方法、税務上の扱い、開始日は申込前に確認します。</p><p>120分の授業では途中に10分の休憩をはさみます。</p></div></div></section><section className="comparison-section"><div className="section-shell"><div className="section-head light-head comparison-head"><div><p className="eyebrow light">COMPARE</p><h2>プランの違い</h2></div><p>同じ項目で、含まれるサポートの範囲を比べられます。</p></div><div className="comparison-labels" aria-hidden="true"><span>項目</span><span>Essentials・$250</span><span>Mentor・$450</span></div><div className="comparison-list">{[["週の授業", "60分・月4回", "120分・月4回（10分休憩）"], ["ATAR科目", "対応", "登録科目を横断して対応"], ["学習計画", "科目ごとの学期計画", "評価課題と目標から逆算した個別ロードマップ"], ["エッセイ", "構成・アウトラインのフィードバック", "論点、段落、根拠、下書き、推敲"], ["授業外の確認", "メール・チャット", "週次更新・週途中の進捗確認"]].map(([label, essentials, mentor]) => <article key={label}><h3>{label}</h3><p><small>Essentials・$250</small>{essentials}</p><p><small>Mentor・$450</small>{mentor}</p></article>)}</div></div></section><section className="section trial-section"><div className="section-shell trial-grid"><div><p className="eyebrow">FIRST CONSULTATION</p><h2>決める前に、まず現在地を整理します。</h2></div><div><p>一つの科目、直近の課題、次の締切を確認し、必要なサポートの深さを一緒に考えます。</p><a className="text-link" href="/ja/contact#inquiry">自分に合うプランを相談 <span aria-hidden="true">→</span></a></div></div></section><ContactBandJa2 /></main><SiteFooterJa2 /></>;
}

function Japanese2Story() {
  const story = [["01", "THE CRISIS", "Year 11。完全に行き詰まる。", "30件のNot Achievedを記録し、IELTSも未受験。ATAR科目、大学選び、計画的な勉強がどうつながるのか分かりませんでした。"], ["02", "THE TURNING POINT", "頑張り方ではなく、仕組みを変える。", "評価基準を読み、目標管理シートを作り、計画・実行・確認・改善の週次サイクルを繰り返しました。"], ["03", "THE RESULT", "5大学合格。奨学金オファーも獲得。", "メルボルン大学を含む5大学から合格通知と奨学金オファーを受け取り、再現できる学び方を得ました。"]] as const;
  return <><SiteHeaderJa2 current="/story" /><main><PageHeroJa2 eyebrow="MY STORY" currentLabel="ストーリー" title={<>成功談だけではない、<br className="display-break" /> <em>立て直した過程。</em></>} lead="最初から勉強が得意だったわけではありません。何をすればよいか分からなかった時期に、何を変え、どう進み直したかを共有します。" /><section className="section profile-section"><div className="section-shell profile-layout"><aside className="profile-card"><div className="profile-photo" role="img" aria-label="米山陸のプロフィール写真" /><div><strong>米山 陸</strong><span>Riku Yoneyama</span><p>University of Melbourne<br />Bachelor of Commerce</p></div></aside><div className="profile-copy"><p className="eyebrow">PROFILE</p><h2>迷っていた経験があるから、最初の一歩を一緒に小さくできます。</h2><p className="large-copy">海外進学で必要なのは、情報の量だけではありません。誰に聞くか、何を先にするか、大きな目標を今週の行動にどう変えるかが大切です。</p><p>ATARの評価、英語、大学選び、海外生活のすべてで迷った経験をもとに、責めるのではなく現在地を確認して次の行動をつくります。</p><dl className="profile-facts"><div><dt>Now</dt><dd>University of Melbourne, Bachelor of Commerce</dd></div><div><dt>Focus</dt><dd>ATAR科目、大学進学、留学生活</dd></div><div><dt>Format</dt><dd>オンライン / 日本語</dd></div></dl></div></div></section><section className="story-section"><div className="section-shell story-layout"><div className="section-head light-head sticky-head"><p className="eyebrow light">FROM CRISIS TO CLARITY</p><h2>迷いから、見える道筋へ。</h2></div><div className="story-list">{story.map(([number, label, title, text]) => <article key={number}><div className="story-index"><span>{number}</span><i /></div><div><p className="story-label">{label}</p><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section><section className="section belief-section"><div className="section-shell belief-grid"><div><p className="eyebrow">WHAT I BELIEVE</p><h2>目的は依存ではなく、自分で次の一手を選べること。</h2></div><blockquote><p>よいメンタリングは、いつか必要なくなるものだと思っています。評価基準を読み、目標から逆算し、生活が変わっても計画を調整できる力を身につけてほしいと考えています。</p></blockquote></div></section><section className="next-page"><div className="section-shell next-page-inner"><p>Next</p><a href="/ja/results">大学・奨学金の実績を見る <span aria-hidden="true">→</span></a></div></section><ContactBandJa2 /></main><SiteFooterJa2 /></>;
}

function Japanese2Results() {
  return <><SiteHeaderJa2 current="/results" /><main><PageHeroJa2 eyebrow="PERSONAL RESULTS" currentLabel="実績" title={<>数字が示すものを、<br className="display-break" /> <em>明確に伝える。</em></>} lead="ここに掲載するのは米山陸本人の2023年出願結果です。指導対象の生徒の成果や、将来の結果を保証するものではありません。" /><section className="result-summary" aria-label="本人の出願実績"><div className="section-shell result-summary-grid"><article><span>出願大学</span><strong>5</strong><p>大学へ出願</p></article><article><span>合格</span><strong>5 / 5</strong><p>すべての大学から合格通知</p></article><article><span>奨学金</span><strong>5</strong><p>すべての大学からオファー</p></article></div></section><section className="section offer-section"><div className="section-shell"><div className="section-head result-list-head"><div><p className="eyebrow">UNIVERSITY OFFERS</p><h2>合格・奨学金の詳細</h2></div><p>2023 / 本人の出願記録</p></div><div className="university-grid">{universities.map(([name, image, detail], index) => <article className="university-card" key={name}><div className="university-card-media"><img src={image} alt="" width="1600" height="1000" loading="lazy" /><span aria-hidden="true" /></div><div className="university-card-content"><div className="university-card-meta"><span>{String(index + 1).padStart(2, "0")}</span><p>2023 PERSONAL OFFER</p></div><div className="university-card-copy"><h3>{name}</h3><strong>{detail}</strong></div></div></article>)}</div><p className="result-disclaimer">上記は米山陸が2023年に受け取った合格・奨学金オファーです。サポートを受ける生徒の合格や奨学金を保証するものではありません。</p></div></section><section className="experience-section"><div className="section-shell experience-grid"><div><p className="eyebrow light">FROM RESULT TO SUPPORT</p><h2>結果の裏側にある判断を共有します。</h2></div><div className="experience-points"><article><span>01</span><h3>何を比較したか</h3><p>ランキングだけでなく、専攻、環境、費用、卒業後の選択肢を比較しました。</p></article><article><span>02</span><h3>何を先に準備したか</h3><p>成績、英語、書類、奨学金を締切順に並べました。</p></article><article><span>03</span><h3>崩れたときに戻るもの</h3><p>目標と週次レビューが、計画を立て直す基準になりました。</p></article></div></div></section><ContactBandJa2 /></main><SiteFooterJa2 /></>;
}

function Japanese2Contact() {
  const faqs = [["NCEAとATARの両方に対応していますか？", "はい。英語サイトの日本語2ではATARを中心に、NCEAを含む教育制度や科目の状況も初回相談で確認します。"], ["120分の授業に休憩はありますか？", "はい。120分の授業では途中に10分の休憩をはさみます。"], ["相談したら必ず契約が必要ですか？", "いいえ。初回相談では現在地と次の一歩を整理するだけでも大丈夫です。"]] as const;
  return <><SiteHeaderJa2 current="/contact" /><main><PageHeroJa2 eyebrow="HOW TO START" currentLabel="相談の流れ" title={<>最初の30分で、<br className="display-break" /> <em>悩みを次の一歩へ。</em></>} lead="すぐに契約する必要はありません。現在地、直近の課題、次の締切を確認し、必要なサポートを一緒に考えます。" /><section className="section process-section"><div className="section-shell"><div className="section-head process-head"><div><p className="eyebrow">THE PROCESS</p><h2>相談からサポートまでの4ステップ</h2></div><p>無料相談、個別設計、試行、継続。双方が相性を確かめられる流れです。</p></div><ol className="process-list">{steps.map(([number, title, text]) => <li key={number} tabIndex={0}><span className="process-media" aria-hidden="true"><img src={`/scenes/step-${number.slice(-2)}.jpg`} alt="" loading="lazy" /></span><span>{number}</span><div><small>STEP {number}</small><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section><section className="consultation-section" id="inquiry"><div className="section-shell inquiry-grid"><div><p className="eyebrow light">FREE CONSULTATION</p><h2>今、難しく感じていることを教えてください。</h2></div><div className="inquiry-copy"><p>ATAR科目、学習計画、エッセイ、大学選び、留学生活。まだ悩みがまとまっていなくても大丈夫です。</p><a className="button button-light" href="mailto:yoneriku19@gmail.com?subject=%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87">メールで無料相談 <span aria-hidden="true">↗</span></a><dl className="inquiry-details"><div><dt>Email</dt><dd><a href="mailto:yoneriku19@gmail.com">yoneriku19@gmail.com</a></dd></div><div><dt>Phone</dt><dd><a href="tel:+61451919748">0451919748</a></dd></div><div><dt>Format</dt><dd>オンライン / 日本語</dd></div></dl></div></div></section><section className="section faq-section"><div className="section-shell faq-layout"><div className="section-head sticky-head"><p className="eyebrow">FAQ</p><h2>よくある質問</h2><p>初回相談前に、メールで質問を送ることもできます。</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary><span>{question}</span><i aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section><section className="closing-note"><div className="section-shell closing-note-inner"><p>NO PRESSURE</p><h2>相談後に合わないと感じたら、<br className="display-break" />そこで止めても大丈夫です。</h2><p>最初の相談は状況を整理する時間であり、継続サポートへの義務ではありません。</p></div></section></main><SiteFooterJa2 /></>;
}

export default async function Japanese2Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  switch (slug.join("/")) {
    case "":
      return <Japanese2Home />;
    case "support":
      return <Japanese2Support />;
    case "plans":
      return <Japanese2Plans />;
    case "story":
      return <Japanese2Story />;
    case "results":
      return <Japanese2Results />;
    case "contact":
      return <Japanese2Contact />;
    default:
      notFound();
  }
}
