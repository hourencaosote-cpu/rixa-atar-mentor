import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname.replaceAll("/", "-")}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

const routes = [
  ["/", "Turn uncertainty into"],
  ["/support", "the way forward"],
  ["/plans", "Two monthly plans"],
  ["/story", "the rebuilding process"],
  ["/results", "what the numbers mean"],
  ["/contact", "one concern into a next step"],
];

for (const [pathname, expected] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, /<html lang="en">/i);
    assert.match(html, new RegExp(expected));
    assert.match(html, /src="\/rixa-logo\.png"/);
    assert.match(html, /class="language-switch"/);
    assert.match(html, />EN</);
    assert.match(html, />日本語</);
    const japanesePath = pathname === "/" ? "/ja" : `/ja${pathname}`;
    assert.match(html, new RegExp(`href="${japanesePath}"`));
    const pageCopy = html.replaceAll("日本語", "");
    assert.doesNotMatch(pageCopy, /[ぁ-んァ-ン一-龯々ー]/);
    assert.match(html, /class="consultation-chat"/);
    assert.match(html, /Academic planning consultation/);
    assert.match(html, /Question 1 \/ 10/);
    for (const href of ["/support", "/plans", "/story", "/results", "/contact"]) assert.match(html, new RegExp(`href="${href}`));
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
  });
}

test("home identifies ATAR support and personal results", async () => {
  const html = await (await render("/")).text();
  assert.match(html, /ATAR &amp; ACADEMIC MENTOR/);
  assert.match(html, /Personal 2023 application record/);
  assert.match(html, /The subjects we can plan around/);
  assert.match(html, /University of Melbourne/);
});

test("support explains essay framework and subject scope", async () => {
  const html = await (await render("/support")).text();
  assert.match(html, /ESSAY FRAMEWORK/);
  assert.match(html, /Turn the prompt into a task list/);
  assert.match(html, /point, evidence, explanation, and link-back/);
  assert.match(html, /ATAR subjects/);
  assert.match(html, /Mathematical Methods/);
});

test("plans page renders the requested pricing and clear plan differences", async () => {
  const html = await (await render("/plans")).text();
  assert.match(html, /Essentials/);
  assert.match(html, /\$250/);
  assert.match(html, /Mentor/);
  assert.match(html, /\$450/);
  assert.match(html, /4 sessions per month/i);
  assert.match(html, /10-minute break/i);
  assert.match(html, /ATAR classes/);
  assert.match(html, /individual roadmap mapped to assessments and ATAR goals/i);
  assert.match(html, /mid-week accountability/i);
});

test("results page renders campus photography with attribution", async () => {
  const html = await (await render("/results")).text();
  for (const image of ["/universities/melbourne.jpg", "/universities/auckland.jpg", "/universities/wellington.jpg", "/universities/adelaide.jpg", "/universities/massey.jpg"]) assert.ok(html.includes(image));
  assert.match(html, /Campus photography via Wikimedia Commons/);
  assert.match(html, /CC BY-SA 2\.0/);
  assert.match(html, /CC BY-SA 4\.0/);
  assert.match(html, /CC BY 2\.0/);
});

test("contact page exposes working contact links", async () => {
  const html = await (await render("/contact")).text();
  assert.match(html, /href="mailto:yoneriku19@gmail\.com/);
  assert.match(html, /href="tel:\+819012906147"/);
  assert.match(html, /Four steps from conversation to support/);
});

const japanese2Routes = [
  ["/ja", "迷いを整理して"],
  ["/ja/support", "科目だけでなく"],
  ["/ja/plans", "2つの月額プラン"],
  ["/ja/story", "立て直した過程"],
  ["/ja/results", "明確に伝える"],
  ["/ja/contact", "悩みを次の一歩へ"],
];

for (const [pathname, expected] of japanese2Routes) {
  test(`server-renders Japanese 2 ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /class="locale-ja2"/);
    assert.match(html, new RegExp(expected));
    assert.match(html, /class="language-switch"/);
    const englishPath = pathname === "/ja" ? "/" : pathname.replace(/^\/ja/, "");
    assert.match(html, new RegExp(`href="${englishPath}"[^>]*>EN</`));
    assert.match(html, /aria-current="page">日本語</);
    assert.doesNotMatch(html, /rixa-jp\.vercel\.app/);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
  });
}
