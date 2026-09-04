"use client";

import { useEffect } from "react";

const targetSelector = [
  ".home-hero .hero-copy",
  ".home-hero .portrait-card",
  ".page-hero-copy",
  ".proof-grid > div",
  ".concern-grid > article",
  ".path-grid > .path-card",
  ".story-preview-grid > div",
  ".result-preview-grid > div",
  ".contact-band-grid > div",
  ".audience-list > li",
  ".pillar-grid > article",
  ".method-list > li",
  ".scope-list > article",
  ".boundary-columns > article",
  ".profile-layout > *",
  ".story-list > article",
  ".belief-grid > *",
  ".result-summary-grid > article",
  ".university-list > article",
  ".experience-points > article",
  ".process-list > li",
  ".plan-grid > article",
  ".comparison-list > article",
  ".voice-grid > article",
  ".faq-list > details",
  ".inquiry-grid > div",
].join(",");

export function MotionRuntime() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(targetSelector),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    targets.forEach((target, index) => {
      target.classList.add("reveal-target");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
    });
    document.documentElement.classList.add("motion-ready");

    // 対応科目リング: ホバー / フォーカス / タップで、背景写真と説明を切り替えます。
    document
      .querySelectorAll<HTMLElement>("[data-subject-ring]")
      .forEach((ring) => {
        const labels = Array.from(
          ring.querySelectorAll<HTMLElement>("[data-ring-label]"),
        );
        const groups = [
          labels,
          Array.from(ring.querySelectorAll<HTMLElement>("[data-ring-panel]")),
          Array.from(ring.querySelectorAll<HTMLElement>("[data-ring-image]")),
          Array.from(ring.querySelectorAll<SVGPathElement>("[data-ring-arc]")),
        ];

        const setActive = (index: number) => {
          groups.forEach((group) => {
            group.forEach((element, order) => {
              element.classList.toggle("is-active", order === index);
            });
          });
        };

        labels.forEach((label, index) => {
          const activate = () => setActive(index);
          const events = ["mouseenter", "focus", "click"] as const;
          events.forEach((type) => label.addEventListener(type, activate));
          cleanups.push(() => {
            events.forEach((type) => label.removeEventListener(type, activate));
          });
        });

        // 見た目の線は細いので、透明な太い当たり判定パス側で拾います。
        ring
          .querySelectorAll<SVGPathElement>("[data-ring-hit]")
          .forEach((hit, index) => {
            const activate = () => setActive(index);
            hit.addEventListener("mouseenter", activate);
            hit.addEventListener("click", activate);
            cleanups.push(() => {
              hit.removeEventListener("mouseenter", activate);
              hit.removeEventListener("click", activate);
            });
          });

        ring.classList.add("is-ready");
        setActive(0);
        cleanups.push(() => ring.classList.remove("is-ready"));
      });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -9% 0px",
        threshold: 0.1,
      },
    );

    targets.forEach((target) => observer.observe(target));
    cleanups.push(() => observer.disconnect());

    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scene]"),
    );

    if (scenes.length > 0) {
      const root = document.documentElement;
      const visibleScenes = new Set<HTMLElement>();
      const autoplayTimers = new Map<HTMLElement, number>();
      let frameId = 0;
      let autoplayAllowed = true;
      let resumeTimer = 0;
      let playedIndex = -1;
      const AUTOPLAY_RESUME_MS = 2600;

      const stepCount = (scene: HTMLElement) =>
        Math.max(1, Number(scene.dataset.sceneSteps ?? 1));

      const stopAutoplay = (scene: HTMLElement) => {
        const timer = autoplayTimers.get(scene);
        if (timer !== undefined) {
          window.clearInterval(timer);
          autoplayTimers.delete(scene);
        }
        scene.classList.remove("is-playing");
      };

      // 操作中は自動送りを止め、手が止まったら再開します。
      const pauseAutoplay = () => {
        autoplayAllowed = false;
        autoplayTimers.forEach((timer) => window.clearInterval(timer));
        autoplayTimers.clear();
        scenes.forEach((scene) => scene.classList.remove("is-playing"));
        if (resumeTimer !== 0) {
          window.clearTimeout(resumeTimer);
        }
        resumeTimer = window.setTimeout(() => {
          resumeTimer = 0;
          autoplayAllowed = true;
          request();
        }, AUTOPLAY_RESUME_MS);
      };

      const goToStep = (
        scene: HTMLElement,
        index: number,
        instant = false,
      ) => {
        const steps = stepCount(scene);
        const clamped = Math.min(steps - 1, Math.max(0, index));
        const rect = scene.getBoundingClientRect();
        const travel = rect.height - window.innerHeight;
        if (travel <= 0) {
          return;
        }
        window.scrollTo({
          top: window.scrollY + rect.top + travel * ((clamped + 0.5) / steps),
          behavior: instant ? "instant" : "smooth",
        });
      };

      const startAutoplay = (scene: HTMLElement) => {
        if (!autoplayAllowed || autoplayTimers.has(scene)) {
          return;
        }
        const delay = Number(scene.dataset.sceneAutoplay ?? 0);
        if (!(delay > 0)) {
          return;
        }
        const timer = window.setInterval(() => {
          const steps = stepCount(scene);
          const current = Number(scene.dataset.sceneIndex ?? 0);
          goToStep(scene, current >= steps - 1 ? 0 : current + 1, true);
        }, delay);
        autoplayTimers.set(scene, timer);
        scene.style.setProperty("--autoplay-ms", `${delay}ms`);
        scene.classList.add("is-playing");
      };

      // スクロール量をシーンごとの進捗（0〜1）に変換し、CSS変数と状態クラスへ渡します。
      const paint = () => {
        frameId = 0;
        visibleScenes.forEach((scene) => {
          const steps = stepCount(scene);
          const rect = scene.getBoundingClientRect();
          const travel = rect.height - window.innerHeight;
          const progress =
            travel <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / travel));
          const position = Math.min(steps - 0.0001, progress * steps);
          const index = Math.floor(position);

          scene.style.setProperty("--scene-progress", progress.toFixed(4));
          scene.style.setProperty(
            "--frame-progress",
            (position - index).toFixed(4),
          );
          scene.dataset.sceneIndex = String(index);

          scene
            .querySelectorAll<HTMLElement>(
              "[data-scene-frame], [data-scene-dot]",
            )
            .forEach((element) => {
              const own = Number(element.dataset.sceneOrder ?? 0);
              element.classList.toggle("is-active", own === index);
              element.classList.toggle("is-past", own < index);
            });

          // バーの伸び: 自動送り中は時間で、手動スクロール中はスクロール量で。
          const playing = scene.classList.contains("is-playing");
          scene
            .querySelectorAll<HTMLElement>("[data-scene-dot]")
            .forEach((dot) => {
              const own = Number(dot.dataset.sceneOrder ?? 0);
              if (own < index) {
                dot.style.setProperty("--fill", "1");
              } else if (own > index) {
                dot.style.setProperty("--fill", "0");
              } else if (!playing) {
                dot.style.setProperty("--fill", (position - index).toFixed(4));
              }
            });

          // シーンが画面を占有している間だけ自動送りを動かします。
          if (rect.top <= 1 && rect.bottom >= window.innerHeight - 1) {
            const wasPlaying = scene.classList.contains("is-playing");
            startAutoplay(scene);
            if (scene.classList.contains("is-playing")) {
              const activeDot = scene.querySelector<HTMLElement>(
                "[data-scene-dot].is-active",
              );
              if (activeDot && (!wasPlaying || playedIndex !== index)) {
                playedIndex = index;
                activeDot.style.setProperty("--fill", "0");
                void activeDot.offsetWidth;
                activeDot.style.setProperty("--fill", "1");
              }
            }
          } else {
            stopAutoplay(scene);
          }
        });
      };

      const request = () => {
        if (frameId === 0) {
          frameId = window.requestAnimationFrame(paint);
        }
      };

      const dotCleanups: Array<() => void> = [];

      scenes.forEach((scene) => {
        scene
          .querySelectorAll<HTMLElement>("[data-scene-frame]")
          .forEach((element, order) => {
            element.dataset.sceneOrder = String(order);
          });
        scene
          .querySelectorAll<HTMLElement>("[data-scene-dot]")
          .forEach((element, order) => {
            element.dataset.sceneOrder = String(order);
            const button = element.querySelector("button");
            if (!button) {
              return;
            }
            const onClick = () => {
              pauseAutoplay();
              goToStep(scene, order);
            };
            button.addEventListener("click", onClick);
            dotCleanups.push(() =>
              button.removeEventListener("click", onClick),
            );
          });
      });

      const sceneObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const scene = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              visibleScenes.add(scene);
            } else {
              visibleScenes.delete(scene);
              stopAutoplay(scene);
            }
          });
          request();
        },
        { threshold: 0 },
      );

      scenes.forEach((scene) => sceneObserver.observe(scene));
      window.addEventListener("scroll", request, { passive: true });
      window.addEventListener("resize", request);
      window.addEventListener("wheel", pauseAutoplay, { passive: true });
      window.addEventListener("touchstart", pauseAutoplay, { passive: true });
      window.addEventListener("keydown", pauseAutoplay);
      root.classList.add("scenes-ready");
      request();

      cleanups.push(() => {
        sceneObserver.disconnect();
        window.removeEventListener("scroll", request);
        window.removeEventListener("resize", request);
        window.removeEventListener("wheel", pauseAutoplay);
        window.removeEventListener("touchstart", pauseAutoplay);
        window.removeEventListener("keydown", pauseAutoplay);
        dotCleanups.forEach((cleanup) => cleanup());
        autoplayTimers.forEach((timer) => window.clearInterval(timer));
        autoplayTimers.clear();
        if (resumeTimer !== 0) {
          window.clearTimeout(resumeTimer);
        }
        if (frameId !== 0) {
          window.cancelAnimationFrame(frameId);
        }
        root.classList.remove("scenes-ready");
      });
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
