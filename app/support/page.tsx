import type { Metadata } from "next";
import { ContactBand, PageHero, SiteFooter, SiteHeader } from "../_components/SiteChrome";
import { essayFramework, methods, programExamples, subjectAreas, supportAreas } from "../_data/site";

export const metadata: Metadata = {
  title: "Support areas",
  description: "ATAR subject mentoring, forward planning, essay coaching, and university pathway support for Australian high school students.",
};

const subjectGroups = [
  { title: "University & scholarships", text: "Course and major choices / application planning / scholarship strategy / document review / interview preparation", note: "We organise options using the experience of applying to five universities." },
  { title: "Study & student life", text: "Study habits / time management / weekly reviews / adapting to life overseas / progress updates for parents or guardians", note: "Study and life are planned together so the routine remains sustainable." },
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader current="/support" />
      <main>
        <PageHero eyebrow="SUPPORT" currentLabel="Support" title={<><span className="page-title-line">Not just the subject,</span><br className="display-break" /><span className="page-title-line"><em>the way forward</em></span><span className="page-title-tail"> as well.</span></>} lead="Grades, future study, and student life are connected. We work backwards from your goals and turn everyday study, assessment preparation, and applications into one clear plan." />

        <section className="section audience-section" aria-labelledby="audience-title">
          <div className="section-shell audience-grid">
            <div className="section-head sticky-head"><p className="eyebrow">FOR WHOM</p><h2 id="audience-title">For students who want a clearer next step.</h2><p>Rather than handing over a generic answer, we understand the situation and build the conditions for you to move forward independently.</p></div>
            <ul className="audience-list">
              <li><span>01</span><p>You want to understand ATAR requirements, course expectations, and assessment criteria.</p></li>
              <li><span>02</span><p>You want to compare university, course, and scholarship options with a realistic plan.</p></li>
              <li><span>03</span><p>Your plans keep slipping and you want to rebuild your study routine.</p></li>
              <li><span>04</span><p>You want to speak with someone who understands studying across countries and systems.</p></li>
            </ul>
          </div>
        </section>

        <section className="support-pillars" aria-labelledby="pillars-title">
          <div className="section-shell"><div className="section-head light-head"><p className="eyebrow light">THREE PILLARS</p><h2 id="pillars-title">Combine the areas you need.</h2></div><div className="pillar-grid">{supportAreas.map((area) => <article key={area.number}><span className="pillar-number">{area.number}</span><p className="pillar-label">{area.title}</p><h3>{area.lead}</h3><p>{area.text}</p><ul>{area.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div></div>
        </section>

        <section className="section method-section" aria-labelledby="method-title">
          <div className="section-shell method-layout"><div className="method-title"><p className="eyebrow">THE METHOD</p><h2 id="method-title">Progress through a <em>repeatable system</em>, not talent alone.</h2><p>We make goals, actions, understanding, and review visible instead of ending with “just work harder.”</p></div><ol className="method-list">{methods.map((method) => <li key={method.number}><span>{method.number}</span><div><h3>{method.title}</h3><p>{method.text}</p></div></li>)}</ol></div>
        </section>

        <section className="scope-section" aria-labelledby="scope-title">
          <div className="section-shell"><div className="section-head light-head compact-head"><p className="eyebrow light">SCOPE</p><h2 id="scope-title">Subjects and planning areas</h2></div><div className="scope-subject-board" aria-label="Supported subject areas"><div className="scope-subject-intro"><h3>ATAR subjects</h3><p>Combine one subject or several. We confirm the exact course and school requirements first.</p></div><div className="scope-subject-groups">{subjectAreas.map((area) => <article key={area.category}><span>{area.title}</span><p>{area.subjects.join(" / ")}</p></article>)}</div><small>Year level, course level, and assessment details are confirmed in the first consultation.</small></div><div className="scope-list">{subjectGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><p>{group.text}</p><small>{group.note}</small></article>)}</div></div>
        </section>

        <section className="section essay-section" id="essay-framework" aria-labelledby="essay-title">
          <div className="section-shell essay-layout"><div className="section-head sticky-head"><p className="eyebrow">ESSAY FRAMEWORK</p><h2 id="essay-title">Write an essay as an argument the reader can follow.</h2><p>Essay coaching is more than correcting sentences. We teach a repeatable structure for turning a question into a position, evidence, analysis, and a confident conclusion.</p></div><ol className="essay-framework-list">{essayFramework.map((step) => <li key={step.number}><div className="essay-step-index"><span>{step.number}</span><i /></div><div><p className="essay-step-label">{step.label}</p><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div>
        </section>

        <section className="section program-examples" id="program-examples" aria-labelledby="program-examples-title">
          <div className="section-shell"><div className="section-head"><div><p className="eyebrow">PROGRAM EXAMPLES</p><h2 id="program-examples-title">What a plan can look like</h2></div><p>These are examples, not fixed courses. We adjust the focus around strengths, gaps, school dates, and future priorities.</p></div><div className="program-example-grid">{programExamples.map((example) => <article key={example.number}><span>{example.number}</span><p>{example.subjects}</p><h3>{example.title}</h3><small>{example.text}</small></article>)}</div></div>
        </section>

        <section className="section boundaries" aria-labelledby="boundaries-title"><div className="section-shell boundary-grid"><div><p className="eyebrow">A CLEAR PROMISE</p><h2 id="boundaries-title">What we support, and what we do not.</h2></div><div className="boundary-columns"><article><span>DO</span><h3>Support thinking and preparation</h3><p>We clarify the current position, compare options, and turn them into an executable plan. Essays and assessments are improved through conversation so the student’s own thinking stays at the centre.</p></article><article><span>DON&apos;T</span><h3>Guarantee or do the work for you</h3><p>We cannot guarantee an ATAR, university offer, or scholarship. We do not write assignments or application documents on a student’s behalf.</p></article></div></div></section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
