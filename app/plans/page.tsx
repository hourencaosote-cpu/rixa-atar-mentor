import type { Metadata } from "next";
import { ContactBand, PageHero, SiteFooter, SiteHeader } from "../_components/SiteChrome";
import { plans, studentVoices } from "../_data/site";

export const metadata: Metadata = {
  title: "Plans & pricing",
  description: "Compare the $250 Essentials plan and $450 Mentor plan for Australian high school students, including ATAR support and forward planning.",
};

const comparison = [
  { label: "Weekly lesson", essentials: "1 x 60 minutes · 4 sessions/month", mentor: "1 x 120 minutes · 4 sessions/month (includes a 10-minute break)" },
  { label: "ATAR classes", essentials: "Included", mentor: "Included across enrolled subjects" },
  { label: "Subject planning", essentials: "Term-by-term plan for each subject", mentor: "Individual roadmap mapped to assessments and ATAR goals" },
  { label: "Essay support", essentials: "Structure and outline feedback", mentor: "Thesis, paragraph logic, evidence, drafting, and revision" },
  { label: "Between-session support", essentials: "Email or chat check-ins", mentor: "Weekly plan updates + mid-week accountability" },
  { label: "University pathways", essentials: "Discussed when relevant", mentor: "Dedicated course and application planning" },
  { label: "Parent or guardian update", essentials: "On request", mentor: "Progress summary when requested" },
];

export default function PlansPage() {
  return (
    <>
      <SiteHeader current="/plans" />
      <main>
        <PageHero eyebrow="PLANS & PRICING" currentLabel="Plans & pricing" title={<>Choose the depth of support that fits your next stage.<br className="display-break" />{" "}<em>Two monthly plans.</em></>} lead="Both plans support ATAR classes and include forward planning for each subject and each student. The difference is how much planning, feedback, and accountability happens around the weekly lesson." />

        <section className="section plan-section" aria-labelledby="plans-title">
          <div className="section-shell"><div className="section-head plan-head"><div><p className="eyebrow">MONTHLY PLANS</p><h2 id="plans-title">Price and support included</h2></div><p>Both plans are delivered online. We confirm the exact subjects, school calendar, and priorities in the first consultation.</p></div>
            <div className="plan-grid">{plans.map((plan, index) => <article className={plan.id === "mentor" ? "featured-plan" : ""} id={plan.id} key={plan.id}><div className="plan-topline"><span>{String(index + 1).padStart(2, "0")}</span>{plan.id === "mentor" && <small>DEEP SUPPORT</small>}</div><p className="plan-en">{plan.name}</p><h3>{plan.subtitle}</h3><div className="plan-price"><span>Monthly</span><strong>{plan.price}</strong></div><p className="plan-cadence">{plan.cadence} · online</p><p className="plan-lead">{plan.lead}</p><ul>{plan.features.map((feature) => <li key={feature}><i aria-hidden="true">✓</i><span>{feature}</span></li>)}</ul><a className="button button-primary" href="/contact#inquiry">Ask about this plan <span aria-hidden="true">↗</span></a></article>)}</div>
            <div className="price-notes"><p>Prices are listed in Australian dollars. Payment method, tax treatment, and start date are confirmed before enrolment.</p><p>Chat reply times may vary with time zones and the complexity of the question.</p><p>Places are limited so that each student receives genuine individual planning.</p></div>
          </div>
        </section>

        <section className="comparison-section" aria-labelledby="comparison-title"><div className="section-shell"><div className="section-head light-head comparison-head"><div><p className="eyebrow light">COMPARE</p><h2 id="comparison-title">What is different between the plans?</h2></div><p>Every row shows what is included in Essentials and what is added in Mentor.</p></div><div className="comparison-labels" aria-hidden="true"><span>Area</span><span>Essentials · $250</span><span>Mentor · $450</span></div><div className="comparison-list">{comparison.map((item) => <article key={item.label}><h3>{item.label}</h3><p><small>Essentials · $250</small>{item.essentials}</p><p><small>Mentor · $450</small>{item.mentor}</p></article>)}</div></div></section>

        <section className="section trial-section" aria-labelledby="trial-title"><div className="section-shell trial-grid"><div><p className="eyebrow">FIRST CONSULTATION</p><h2 id="trial-title">Start with a clear plan, before you choose.</h2></div><div><p>We review the current challenge, one subject or assessment, and the next milestone. You do not need to decide on a monthly plan before the conversation.</p><a className="text-link" href="/contact#inquiry">Ask about the right fit <span aria-hidden="true">→</span></a></div></div></section>

        <section className="voice-section" aria-labelledby="voices-title"><div className="section-shell"><div className="section-head light-head compact-head"><p className="eyebrow light">STUDENT VOICES</p><h2 id="voices-title">What the approach is designed to change</h2></div><div className="voice-grid">{studentVoices.map((voice) => <article key={voice.name}><span aria-hidden="true">“</span><blockquote>{voice.quote}</blockquote><p>{voice.name}<small>{voice.detail}</small></p></article>)}</div><p className="voice-note">These are individual reflections and are not a guarantee of the same result.</p></div></section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
