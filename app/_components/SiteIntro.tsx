"use client";

import { useEffect, useRef, useState } from "react";

type IntroPhase = "checking" | "visible" | "leaving" | "hidden";

let introShownInCurrentDocument = false;

function isInternalPageNavigation() {
  const navigationEntry = performance.getEntriesByType(
    "navigation",
  )[0] as PerformanceNavigationTiming | undefined;

  if (navigationEntry?.type === "reload" || !document.referrer) {
    return false;
  }

  try {
    return new URL(document.referrer).origin === window.location.origin;
  } catch {
    return false;
  }
}

export function SiteIntro() {
  const [phase, setPhase] = useState<IntroPhase>("checking");
  const skipTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (introShownInCurrentDocument || isInternalPageNavigation()) {
      document.body.classList.remove("intro-active");
      const hiddenTimer = window.setTimeout(() => setPhase("hidden"), 0);
      return () => window.clearTimeout(hiddenTimer);
    }

    introShownInCurrentDocument = true;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.classList.add("intro-active");
    const visibleTimer = window.setTimeout(() => setPhase("visible"), 0);
    const leaveTimer = window.setTimeout(
      () => setPhase("leaving"),
      reducedMotion ? 80 : 2600,
    );
    const hideTimer = window.setTimeout(
      () => {
        setPhase("hidden");
        document.body.classList.remove("intro-active");
      },
      reducedMotion ? 180 : 3300,
    );

    return () => {
      window.clearTimeout(visibleTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      if (skipTimerRef.current !== null) {
        window.clearTimeout(skipTimerRef.current);
      }
      document.body.classList.remove("intro-active");
    };
  }, []);

  const skip = () => {
    setPhase("leaving");
    skipTimerRef.current = window.setTimeout(() => {
      setPhase("hidden");
      document.body.classList.remove("intro-active");
    }, 480);
  };

  if (phase === "checking" || phase === "hidden") {
    return null;
  }

  return (
    <div
      className={`site-intro${phase === "leaving" ? " site-intro-leaving" : ""}`}
      aria-label="RIXA logo"
    >
      <div className="intro-grid">
        <button
          type="button"
          className="intro-logo-button"
          onClick={skip}
          aria-label="Show the site"
        >
          <span className="intro-rixa-mark" aria-hidden="true">
            <span className="intro-logo-halo" />
            <svg
              className="intro-logo-svg"
              viewBox="0 0 676 484"
              focusable="false"
            >
              <defs>
                <mask
                  id="rixa-intro-reveal"
                  maskUnits="userSpaceOnUse"
                  maskContentUnits="userSpaceOnUse"
                >
                  <rect width="676" height="484" fill="#000" />
                  <rect
                    className="intro-mask-piece intro-mask-cap"
                    width="676"
                    height="154"
                    fill="#fff"
                  />
                  <rect
                    className="intro-mask-piece intro-mask-tassel"
                    x="432"
                    y="72"
                    width="62"
                    height="132"
                    fill="#fff"
                  />
                  <rect
                    className="intro-mask-piece intro-mask-body"
                    y="145"
                    width="676"
                    height="244"
                    fill="#fff"
                  />
                  <rect
                    className="intro-mask-piece intro-mask-word"
                    y="378"
                    width="676"
                    height="106"
                    fill="#fff"
                  />
                </mask>
              </defs>
              <image
                className="intro-logo-image"
                href="/rixa-logo.png"
                width="676"
                height="484"
                mask="url(#rixa-intro-reveal)"
              />
            </svg>
            <span className="intro-pen-trace" />
          </span>
        </button>
      </div>
    </div>
  );
}
