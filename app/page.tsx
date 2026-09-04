import type { Metadata } from "next";
import { ContactBand, SiteFooter, SiteHeader } from "./_components/SiteChrome";
import { concerns, plans, subjectAreas } from "./_data/site";

export const metadata: Metadata = {
  title: "ATAR & Academic Mentoring for Australian High School Students",
  description:
    "One-to-one ATAR subject support, essay coaching, forward planning, and university pathway mentoring for Australian high school students.",
};

const paths = [
  {
    number: "01",
    label: "SUPPORT",
    title: "Support that connects the whole picture",
    text: "Bring together ATAR subjects, assessments, essay writing, and future study goals in one practical plan.",
    href: "/support",
    image: "/scenes/support.jpg",
    photoAuthor: "Heidy Garcia",
    photoLicense: "CC BY 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Classmate_Taking_Notes_While_Instructor_Explains_Concept.jpg",
    link: "See how support works",
  },
  {
    number: "02",
    label: "MY STORY",
    title: "Why this mentoring exists",
    text: "The approach comes from rebuilding my own study system after getting stuck in Year 11.",
    href: "/story",
    image: "/scenes/story.jpg",
    photoAuthor: "Heidy Garcia",
    photoLicense: "CC BY 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Smiling_Student_Working_on_Assignments_at_Desk.jpg",
    link: "Read the story",
  },
  {
    number: "03",
    label: "RESULTS",
    title: "The experience behind the method",
    text: "See the five university offers and scholarship outcomes from my own 2023 applications, with context.",
    href: "/results",
    image: "/scenes/results.jpg",
    photoAuthor: "Panamitsu",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    photoSource:
      "https://commons.wikimedia.org/wiki/File:Massey_University_graduation_procession.jpg",
    link: "Review the results",
  },
];

const subjectRingArcs = [
  "M 116.14 22.21 A 88 88 0 0 1 197.79 103.86",
  "M 197.79 116.14 A 88 88 0 0 1 116.14 197.79",
  "M 103.86 197.79 A 88 88 0 0 1 22.21 116.14",
  "M 22.21 103.86 A 88 88 0 0 1 103.86 22.21",
];

export default function Home() {
  return (
    <>
      <SiteHeader current="/" />
      <main>
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="section-shell home-hero-grid">
            <div className="hero-copy motion-in">
              <p className="eyebrow">ATAR &amp; ACADEMIC MENTOR</p>
              <h1 id="hero-title">
                <span className="hero-line">Turn uncertainty into</span>
                <br className="hero-break" />
                <span className="hero-line"><em>a way forward.</em></span>
              </h1>
              <p className="hero-lead">
                One-to-one mentoring for Australian high school students. Connect your ATAR subjects,
                assessments, essay writing, and university goals to the next useful action.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="/contact#inquiry">
                  Book a free consultation <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="/support">
                  See the support areas <span aria-hidden="true">→</span>
                </a>
              </div>
              <p className="hero-note">
                Online one-to-one support / English / <span>First consultation about 30 minutes</span>
              </p>
            </div>

            <aside className="portrait-card motion-in" aria-label="Mentor profile">
              <div className="portrait-compact" role="img" aria-label="ATAR and academic mentor Riku Yoneyama" />
              <div className="portrait-meta">
                <div>
                  <strong>Riku Yoneyama</strong>
                  <span>Riku Yoneyama</span>
                </div>
                <p>University of Melbourne<br />Bachelor of Commerce</p>
                <a href="/story">Read the profile →</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="subject-overview" aria-labelledby="subjects-title">
          <div className="section-shell">
            <div className="subject-overview-head">
              <div>
                <p className="eyebrow">SUBJECTS AT A GLANCE</p>
                <h2 id="subjects-title">The subjects we can plan around.</h2>
              </div>
              <p>Start with one subject or combine several with pathway planning. We shape the support around your current level, school calendar, and goal.</p>
            </div>
            <div className="subject-ring" data-subject-ring>
              <div className="subject-ring-bg" aria-hidden="true">
                {subjectAreas.map((area) => <img key={area.category} src={area.ringImage} alt="" loading="lazy" data-ring-image />)}
              </div>
              <div className="subject-ring-copy">
                {subjectAreas.map((area) => (
                  <article className="subject-ring-panel" data-ring-panel key={area.category}>
                    <p className="eyebrow">{area.category}</p>
                    <h3>{area.title}</h3>
                    <p className="subject-ring-subjects">{area.subjects.join(" / ")}</p>
                    <p className="subject-ring-detail">{area.detail}</p>
                  </article>
                ))}
              </div>
              <div className="subject-ring-wrap">
                <svg viewBox="0 0 220 220" aria-hidden="true">
                  {subjectRingArcs.map((path) => <path key={path} d={path} data-ring-arc />)}
                  {subjectRingArcs.map((path) => <path key={`hit-${path}`} d={path} className="subject-ring-hit" data-ring-hit />)}
                </svg>
                <span className="subject-ring-center" aria-hidden="true">ATAR subjects</span>
                {subjectAreas.map((area, index) => <button type="button" className={`subject-ring-label q${index}`} data-ring-label key={area.category}>{area.title}</button>)}
              </div>
            </div>
            <div className="subject-overview-grid">
              {subjectAreas.map((area) => <article key={area.category}><span>{area.category}</span><h3>{area.title}</h3><p>{area.subjects.join(" / ")}</p></article>)}
            </div>
            <p className="path-photo-note subject-photo-note">
              Background photography: {subjectAreas.map((area, index) => <span key={area.category}>{index > 0 && " / "}<a href={area.photoSource} target="_blank" rel="noreferrer">{area.photoAuthor}</a>{" "}<a href={area.photoLicenseUrl} target="_blank" rel="noreferrer">{area.photoLicense}</a></span>)} via Wikimedia Commons
            </p>
            <div className="subject-overview-footer">
              <p>Year level, course level, and assessment details are confirmed in the first consultation.</p>
              <a className="text-link" href="/support#program-examples">See example combinations <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Personal 2023 application record">
          <div className="section-shell proof-grid">
            <div className="proof-intro"><span>PERSONAL RECORD</span><p>My 2023 applications</p></div>
            <div className="proof-item"><strong>5 / 5</strong><span>offers from all five universities</span></div>
            <div className="proof-item"><strong>5</strong><span>scholarship offers</span></div>
            <div className="proof-item proof-item-wide"><strong>Melbourne</strong><span>now studying at the University of Melbourne</span></div>
          </div>
        </section>

        <section className="section concerns-section" aria-labelledby="concerns-title">
          <div className="section-shell">
            <div className="section-head">
              <p className="eyebrow">START FROM HERE</p>
              <h2 id="concerns-title">You can start even when you are not sure what to do next.</h2>
              <p>Before adding more information, we clarify your current position and priorities. The next step starts with your situation, not a generic answer.</p>
            </div>
            <div className="concern-grid">{concerns.map((concern) => <article key={concern.number}><span>{concern.number}</span><h3>{concern.title}</h3><p>{concern.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section path-section" aria-labelledby="path-title">
          <div className="section-shell">
            <div className="section-head compact-head"><p className="eyebrow">EXPLORE</p><h2 id="path-title">Choose what you want to understand first.</h2></div>
            <div className="path-grid">{paths.map((path) => <a className="path-card" href={path.href} key={path.number}><span className="path-card-media" aria-hidden="true"><img src={path.image} alt="" loading="lazy" /></span><div className="path-card-top"><span>{path.number}</span><small>{path.label}</small></div><h3>{path.title}</h3><p>{path.text}</p><strong>{path.link}<span aria-hidden="true">↗</span></strong></a>)}</div>
            <p className="path-photo-note">Background photography: {paths.map((path, index) => <span key={path.number}>{index > 0 && " / "}<a href={path.photoSource} target="_blank" rel="noreferrer">{path.photoAuthor}</a>{" "}<a href={path.photoLicenseUrl} target="_blank" rel="noreferrer">{path.photoLicense}</a></span>)} via Wikimedia Commons</p>
          </div>
        </section>

        <section className="story-preview">
          <div className="section-shell story-preview-grid">
            <div><p className="eyebrow light">MY STORY</p><p className="story-kicker">Year 11. Completely stuck.</p></div>
            <div><h2>It was not more effort I needed. It was a system I could keep using.</h2><p>I had 30 Not Achieved results and no clear route to university. Learning how to read criteria, plan backwards, and review each week changed what was possible.</p><a className="button button-outline-light" href="/story">The experience behind the method <span aria-hidden="true">→</span></a></div>
          </div>
        </section>

        <section className="section result-preview" aria-labelledby="result-preview-title">
          <div className="section-shell result-preview-grid">
            <div><p className="eyebrow">PERSONAL RESULTS</p><h2 id="result-preview-title">Experience is evidence, not a promise.</h2></div>
            <div className="result-preview-copy"><p>I applied to five universities, including the University of Melbourne, and received offers and scholarship outcomes from all five. The results page clearly separates my own record from any future student outcomes.</p><div className="result-preview-list" aria-label="Selected university offers"><span>University of Melbourne</span><span>University of Auckland</span><span>Victoria University of Wellington</span></div><a className="text-link" href="/results">See all five outcomes <span aria-hidden="true">→</span></a></div>
          </div>
        </section>

        <section className="home-plan-preview" aria-labelledby="home-plans-title">
          <div className="section-shell home-plan-grid">
            <div><p className="eyebrow light">PLANS &amp; PRICING</p><h2 id="home-plans-title">Two monthly plans for the depth of support you need.</h2><a className="button button-outline-light" href="/plans">Compare the plans <span aria-hidden="true">→</span></a></div>
            <div className="home-plan-list">{plans.map((plan) => <a href={`/plans#${plan.id}`} key={plan.id}><div><span>{plan.name}</span><strong>{plan.subtitle}</strong></div><p>{plan.cadence}</p><p>Monthly <strong>{plan.price}</strong></p><i aria-hidden="true">→</i></a>)}</div>
          </div>
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
