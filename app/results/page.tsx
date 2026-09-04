import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ContactBand, PageHero, SiteFooter, SiteHeader } from "../_components/SiteChrome";
import { universities } from "../_data/site";

export const metadata: Metadata = {
  title: "Results and context",
  description: "Riku Yoneyama's own 2023 university offers and scholarship outcomes, presented separately from future student results.",
};

export default function ResultsPage() {
  return (
    <>
      <SiteHeader current="/results" />
      <main>
        <PageHero eyebrow="PERSONAL RESULTS" currentLabel="Results" title={<>Make clear<br className="display-break" />{" "}<em>what the numbers mean.</em></>} lead="These are the results of Riku Yoneyama's own 2023 applications. They are shared as context for the mentoring approach, not as student results or a promise of future outcomes." />

        <section className="result-summary" aria-label="Personal application summary"><div className="section-shell result-summary-grid"><article><span>APPLICATIONS</span><strong>5</strong><p>universities applied to</p></article><article><span>OFFERS</span><strong>5 / 5</strong><p>universities made an offer</p></article><article><span>SCHOLARSHIPS</span><strong>5</strong><p>scholarship outcomes</p></article></div></section>

        <section className="section offer-section" aria-labelledby="offers-title"><div className="section-shell"><div className="section-head result-list-head"><div><p className="eyebrow">UNIVERSITY OFFERS</p><h2 id="offers-title">Offer and scholarship details</h2></div><p>2023 / personal application record</p></div><div className="campus-scene" data-scene data-scene-steps={universities.length} data-scene-autoplay="4200" style={{ "--scene-steps": universities.length } as CSSProperties}><div className="campus-scene-sticky"><div className="campus-stage">{universities.map((university, index) => <article className="university-card campus-frame" data-scene-frame key={university.name}><div className="university-card-media"><img src={university.image} alt={university.imageAlt} width="1600" height="1000" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : undefined} style={{ objectPosition: university.imagePosition }} /><span aria-hidden="true" /></div><div className="university-card-content"><div className="university-card-meta"><span>{String(index + 1).padStart(2, "0")}</span><p>2023 PERSONAL OFFER</p></div><div className="university-card-copy"><p>{university.detail}</p><h3>{university.name}</h3><strong>{university.offer}</strong><small>Photo: <a href={university.photoSource} target="_blank" rel="noreferrer">{university.photoAuthor}</a>{" / "}<a href={university.photoLicenseUrl} target="_blank" rel="noreferrer">{university.photoLicense}</a></small></div></div></article>)}</div><ol className="campus-rail" aria-label="Switch university"><>{universities.map((university, index) => <li key={university.name} data-scene-dot><button type="button"><span>{String(index + 1).padStart(2, "0")}</span><b>{university.railLabel}</b><i aria-hidden="true" /></button></li>)}</></ol></div></div><p className="university-photo-note">Campus photography via Wikimedia Commons. Images are cropped and colour-treated for display.</p><p className="result-disclaimer">The offers and scholarship outcomes above were received by Riku Yoneyama in 2023. They do not guarantee admission or scholarship success for a student receiving support. Scholarship names and conditions follow the original university notifications.</p></div></section>

        <section className="experience-section" aria-labelledby="experience-title"><div className="section-shell experience-grid"><div><p className="eyebrow light">FROM RESULT TO SUPPORT</p><h2 id="experience-title">Share the decisions behind the result.</h2></div><div className="experience-points"><article><span>01</span><h3>How the universities were compared</h3><p>Not only rankings: course fit, learning environment, cost, and options after graduation.</p></article><article><span>02</span><h3>What was prepared first</h3><p>Grades, English, documents, and scholarships were prioritised by deadline instead of tackled all at once.</p></article><article><span>03</span><h3>What to return to when plans slipped</h3><p>Goals and weekly reviews made it possible to rebuild the plan after an unproductive week.</p></article></div></div></section>

        <section className="section evidence-note" aria-labelledby="evidence-title"><div className="section-shell evidence-grid"><div><p className="eyebrow">TRANSPARENCY</p><h2 id="evidence-title">Context without exaggeration.</h2></div><p>University rankings change by year, so this page does not use a ranking as a sales claim. My application record is kept separate from any future student outcome. In the first consultation, we can explain the relevant experience and the areas of support in concrete terms.</p></div></section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
