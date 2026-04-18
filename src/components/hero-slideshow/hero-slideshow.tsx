import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { getHeroSlideshowImages } from "../../utils/hero-images";
import { preloadImageUrl, preloadImageUrls } from "../../utils/preload-images";
import "./hero-slideshow.css";

const SLIDE_MS = 6500;

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M15.5 19.5 8 12l7.5-7.5 1.4 1.4L10.8 12l6.1 6.1-1.4 1.4Z"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8.5 4.5 16 12l-7.5 7.5-1.4-1.4L13.2 12 7.1 5.9 8.5 4.5Z"
      />
    </svg>
  );
}

const HeroSlideshow = () => {
  const { t } = useTranslation();
  const images = useMemo(() => getHeroSlideshowImages(), []);
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [tabVisible, setTabVisible] = useState(() =>
    typeof document === "undefined" ? true : !document.hidden
  );
  const progress = useMotionValue(0);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  const safeLen = Math.max(1, images.length);
  const current = images[index % safeLen] ?? images[0];

  const heroUrls = useMemo(() => images.map((i) => i.url), [images]);

  useLayoutEffect(() => {
    const first = heroUrls[0];
    if (!first || typeof document === "undefined") return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = first;
    link.setAttribute("data-prima-hero-preload", "1");
    document.head.appendChild(link);
    return () => {
      document.querySelectorAll('link[data-prima-hero-preload="1"]').forEach((n) => n.remove());
    };
  }, [heroUrls]);

  useEffect(() => {
    preloadImageUrls(heroUrls);
  }, [heroUrls]);

  useEffect(() => {
    if (safeLen <= 1) return;
    const next = images[(index + 1) % safeLen];
    const afterNext = images[(index + 2) % safeLen];
    const prev = images[(index - 1 + safeLen) % safeLen];
    preloadImageUrl(next.url);
    preloadImageUrl(afterNext.url);
    preloadImageUrl(prev.url);
  }, [images, index, safeLen]);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + safeLen) % safeLen);
    },
    [safeLen]
  );

  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (reduceMotion || hoverPaused || !tabVisible || safeLen <= 1) {
      controlsRef.current?.stop();
      progress.set(reduceMotion ? 1 : 0);
      return;
    }

    progress.set(0);
    controlsRef.current?.stop();
    controlsRef.current = animate(progress, 1, {
      duration: SLIDE_MS / 1000,
      ease: "linear",
      onComplete: () => {
        setIndex((i) => (i + 1) % safeLen);
      },
    });

    return () => {
      controlsRef.current?.stop();
    };
  }, [index, hoverPaused, tabVisible, progress, reduceMotion, safeLen]);

  useEffect(() => {
    const onVis = () => {
      setTabVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    },
    [go]
  );

  return (
    <section
      className="hero-slideshow"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={t("hero.slideshowLabel")}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setHoverPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setHoverPaused(false);
        }
      }}
    >
      <div className="hero-slideshow-media" aria-hidden={false}>
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={current.label}
            className="hero-slideshow-image"
            src={current.url}
            alt={current.label}
            sizes="100vw"
            decoding="async"
            draggable={false}
            loading="eager"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.15 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </AnimatePresence>
      </div>
      <div className="hero-slideshow-scrim" aria-hidden="true" />
      <div className="hero-slideshow-inner">
        <motion.div
          className="hero-slideshow-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-slideshow-eyebrow">{t("hero.eyebrow")}</p>
          <h1 className="hero-slideshow-title">{t("hero.title")}</h1>
          <p className="hero-slideshow-subtitle">{t("hero.subtitle")}</p>
          <motion.button
            type="button"
            className="hero-slideshow-cta"
            onClick={scrollToContact}
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            {t("hero.scrollToContact")}
          </motion.button>
        </motion.div>

        <div className="hero-slideshow-controls">
          <div className="hero-slideshow-dots" role="tablist" aria-label={t("hero.dotsLabel")}>
            {images.map((img, i) => (
              <button
                key={img.label}
                type="button"
                className="hero-slideshow-dot"
                aria-label={t("hero.goToSlide", { n: i + 1 })}
                aria-current={i === index % safeLen ? "true" : undefined}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="hero-slideshow-arrows">
            <button
              type="button"
              className="hero-slideshow-arrow"
              onClick={() => go(-1)}
              aria-label={t("hero.prevSlide")}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="hero-slideshow-arrow"
              onClick={() => go(1)}
              aria-label={t("hero.nextSlide")}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {!reduceMotion && (
        <motion.div
          className="hero-slideshow-progress"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
      )}
    </section>
  );
};

export default HeroSlideshow;
