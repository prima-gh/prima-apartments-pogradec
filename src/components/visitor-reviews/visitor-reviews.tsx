import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CommentOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { AnimatePresence, motion, useReducedMotion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { visitorReviews } from "../../utils/constants";
import "./visitor-reviews.css";

const springEase = [0.22, 1, 0.36, 1] as const;
const ROTATE_MS = 10000;

function authorInitials(author: string): string {
  const t = author.trim();
  if (!t) return "?";
  const words = t.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    const a = words[0][0] ?? "";
    const b = words[1][0] ?? "";
    return (a + b).toUpperCase();
  }
  return t.slice(0, 2).toUpperCase();
}

const VisitorReviewsComponent = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = visitorReviews.length;

  const review = visitorReviews[index % total];
  const initials = useMemo(() => authorInitials(review.author), [review.author]);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total]
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [total]);

  const cardVariants: Variants = useMemo(
    () => ({
      enter: reduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 22, rotateX: -6, filter: "blur(6px)" },
      center: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        transition: { duration: reduceMotion ? 0.18 : 0.48, ease: springEase },
      },
      exit: reduceMotion
        ? { opacity: 0, transition: { duration: 0.15 } }
        : {
            opacity: 0,
            y: -18,
            rotateX: 8,
            filter: "blur(4px)",
            transition: { duration: 0.36, ease: springEase },
          },
    }),
    [reduceMotion]
  );

  return (
    <motion.section
      className="visitor-reviews"
      aria-labelledby="visitor-reviews-heading"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: springEase }}
    >
      <div className="visitor-reviews-glow" aria-hidden="true" />
      <header className="visitor-reviews-head">
        <span className="visitor-reviews-icon" aria-hidden>
          <CommentOutlined />
        </span>
        <div className="visitor-reviews-head-text">
          <h2 id="visitor-reviews-heading" className="visitor-reviews-title">
            {t("visitorReviews.sectionTitle")}
          </h2>
        </div>
      </header>

      <div className="visitor-reviews-stage">
        <button
          type="button"
          className="visitor-reviews-nav visitor-reviews-nav--prev"
          onClick={() => go(-1)}
          aria-label={t("visitorReviews.prevReview")}
        >
          <LeftOutlined />
        </button>

        <div className="visitor-reviews-card-shell">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={review.author + String(index)}
              className="visitor-reviews-card"
              role="article"
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduceMotion ? 0.18 : 0.4, ease: springEase }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
            >
              <span className="visitor-reviews-deco-quote" aria-hidden>
                &ldquo;
              </span>
              <blockquote
                className="visitor-reviews-quote"
                {...(review.lang ? { lang: review.lang } : {})}
              >
                <span className="visitor-reviews-quote-inner">{review.text}</span>
              </blockquote>
              <footer className="visitor-reviews-footer">
                <span className="visitor-reviews-avatar" aria-hidden>
                  {initials}
                </span>
                <cite className="visitor-reviews-author">{review.author}</cite>
              </footer>
            </motion.article>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className="visitor-reviews-nav visitor-reviews-nav--next"
          onClick={() => go(1)}
          aria-label={t("visitorReviews.nextReview")}
        >
          <RightOutlined />
        </button>
      </div>

      <div className="visitor-reviews-dots" role="tablist" aria-label={t("visitorReviews.chooseReview")}>
        {visitorReviews.map((_, i) => (
          <button
            key={i}
            type="button"
            className="visitor-reviews-dot"
            aria-label={t("visitorReviews.goToReview", { n: i + 1 })}
            aria-current={i === index % total ? "true" : undefined}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default VisitorReviewsComponent;
