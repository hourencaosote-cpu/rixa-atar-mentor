import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../_components/SiteChrome";
import { faqs, steps } from "../_data/site";

export const metadata: Metadata = {
  title: "How to start",
  description: "Learn how the free consultation, individual planning, trial, and ongoing ATAR mentoring process works.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader current="/contact" />
      <main>
        <PageHero eyebrow="HOW TO START" currentLabel="Start here" title={<>Use the first 30 minutes to turn<br className="display-break" /><em>one concern into a next step.</em></>} lead="There is no need to sign up immediately. First, we clarify where you are, what is coming next, and whether this support is genuinely useful for you." />

        <section className="section process-section" aria-labelledby="process-title"><div className="section-shell"><div className="section-head process-head"><div><p className="eyebrow">THE PROCESS</p><h2 id="process-title">Four steps from conversation to support</h2></div><p>Consultation, individual design, a trial, and ongoing mentoring. A simple path that gives both sides time to check the fit.</p></div><ol className="process-list">{steps.map((step) => <li key={step.number} tabIndex={0}><span className="process-media" aria-hidden="true"><img src={step.image} alt="" loading="lazy" /></span><span>{step.number}</span><div><small>{step.meta}</small><h3>{step.title}</h3><p>{step.text}</p><div className="process-detail"><p>{step.detail}</p></div></div></li>)}</ol><p className="path-photo-note">Background photography: {steps.map((step, index) => <span key={step.number}>{index > 0 && " / "}<a href={step.photoSource} target="_blank" rel="noreferrer">{step.photoAuthor}</a>{" "}<a href={step.photoLicenseUrl} target="_blank" rel="noreferrer">{step.photoLicense}</a></span>)} via Wikimedia Commons</p></div></section>

        <section className="consultation-section" id="inquiry" aria-labelledby="inquiry-title"><div className="section-shell inquiry-grid"><div><p className="eyebrow light">FREE CONSULTATION</p><h2 id="inquiry-title">Tell us what feels difficult right now.</h2></div><div className="inquiry-copy"><p>ATAR classes, study planning, essays, university choices, or student life. It is okay if the concern is not perfectly defined yet. In your email, include your year level, country, subjects, and what you would like to improve if you can.</p><a className="button button-light" href="mailto:yoneriku19@gmail.com?subject=Free%20consultation&body=Name:%0D%0AYear%20level:%0D%0ACountry:%0D%0ASubjects:%0D%0AWhat%20I%20would%20like%20help%20with:%0D%0A">Email for a free consultation <span aria-hidden="true">↗</span></a><dl className="inquiry-details"><div><dt>Email</dt><dd><a href="mailto:yoneriku19@gmail.com">yoneriku19@gmail.com</a></dd></div><div><dt>Phone</dt><dd><a href="tel:+819012906147">090-1290-6147</a></dd></div><div><dt>Format</dt><dd>Online / English</dd></div></dl></div></div></section>

        <section className="section faq-section" aria-labelledby="faq-title"><div className="section-shell faq-layout"><div className="section-head sticky-head"><p className="eyebrow">FAQ</p><h2 id="faq-title">Frequently asked questions</h2><p>You can also email a question before the first consultation.</p></div><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary><span>{faq.question}</span><i aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div></div></section>

        <section className="closing-note"><div className="section-shell closing-note-inner"><p>NO PRESSURE</p><h2>If it does not feel right after the conversation,<br className="display-break" />it is okay to stop there.</h2><p>The first consultation is time to organise the situation. It is not a commitment to start ongoing support.</p></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
