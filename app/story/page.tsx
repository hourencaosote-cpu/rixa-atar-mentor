import type { Metadata } from "next";
import { ContactBand, PageHero, SiteFooter, SiteHeader } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "My story",
  description: "The experience behind RIXA's approach to ATAR study planning, essay coaching, and university pathway mentoring.",
};

const story = [
  { number: "01", label: "THE CRISIS", title: "Year 11. Completely stuck.", text: "I had 30 Not Achieved results, had not sat IELTS, and did not understand how ATAR subjects, university choices, or consistent study were supposed to fit together." },
  { number: "02", label: "THE TURNING POINT", title: "I changed the system, not just the effort.", text: "I learned to read assessment criteria, built a goals sheet, and repeated a weekly cycle of planning, doing, checking, and improving. Study became a set of actions I could actually continue." },
  { number: "03", label: "THE RESULT", title: "Five offers. Five scholarship outcomes.", text: "I received offers from five universities, including the University of Melbourne, alongside scholarship outcomes. The lasting result was not confidence in talent, but a method I could use again." },
];

export default function StoryPage() {
  return (
    <>
      <SiteHeader current="/story" />
      <main>
        <PageHero eyebrow="MY STORY" currentLabel="My story" title={<>More than a success story,<br className="display-break" />{" "}<em>the rebuilding process.</em></>} lead="I was not naturally good at study from the beginning. What matters to this mentoring is what I changed when I did not know what to do, and how I learned to move forward again." />

        <section className="section profile-section" aria-labelledby="profile-title"><div className="section-shell profile-layout"><aside className="profile-card"><div className="profile-photo" role="img" aria-label="Profile photo of Riku Yoneyama" /><div><strong>Riku Yoneyama</strong><span>Riku Yoneyama</span><p>University of Melbourne<br />Bachelor of Commerce</p></div></aside><div className="profile-copy"><p className="eyebrow">PROFILE</p><h2 id="profile-title">The perspective of someone who was once unsure.</h2><p className="large-copy">For students considering study overseas, the barrier is often not just missing information. It is not knowing who to ask, what matters first, or how to turn a big goal into this week’s work.</p><p>I struggled with ATAR assessment, English, university choices, and the routines of living abroad. That is why the starting point is not blame. We name the situation, then make the next action small enough to begin.</p><dl className="profile-facts"><div><dt>Now</dt><dd>University of Melbourne, Bachelor of Commerce</dd></div><div><dt>Focus</dt><dd>ATAR subjects, university pathways, student life</dd></div><div><dt>Format</dt><dd>Online / English</dd></div></dl></div></div></section>

        <section className="story-section" aria-labelledby="story-title"><div className="section-shell story-layout"><div className="section-head light-head sticky-head"><p className="eyebrow light">FROM CRISIS TO CLARITY</p><h2 id="story-title">From uncertainty to a visible route.</h2></div><div className="story-list">{story.map((item) => <article key={item.number}><div className="story-index"><span>{item.number}</span><i /></div><div><p className="story-label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>

        <section className="section belief-section" aria-labelledby="belief-title"><div className="section-shell belief-grid"><div><p className="eyebrow">WHAT I BELIEVE</p><h2 id="belief-title">The goal is not dependence. It is the ability to choose your next move.</h2></div><blockquote><p>Good mentoring should eventually make itself less necessary. I want students to read criteria, work backwards from a goal, and adjust a plan when life changes. University offers matter, but the transferable skill is knowing how to keep learning.</p></blockquote></div></section>

        <section className="next-page"><div className="section-shell next-page-inner"><p>Next</p><a href="/results">My university and scholarship outcomes <span aria-hidden="true">→</span></a></div></section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
