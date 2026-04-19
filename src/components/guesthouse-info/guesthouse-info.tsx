import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./guesthouse-info.css";

const springEase = [0.22, 1, 0.36, 1] as const;

const GuesthouseInfoComponent = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="gh-info-section"
      aria-labelledby="gh-info-section-heading"
    >
      <h2 id="gh-info-section-heading" className="gh-info-section-title">
        {t("guesthouseInfo.sectionLabel")}
      </h2>
      <motion.div
        className="gh-info-container"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: springEase }}
      >
        <motion.div
          className="gh-card pogradec"
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: reduceMotion ? 0.2 : 0.5, ease: springEase },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          whileTap={reduceMotion ? undefined : { scale: 0.995 }}
        >
          <div className="gh-card-content">
            <h3>{t("guesthouseInfo.locationTitle")}</h3>
            <p>{t("guesthouseInfo.locationDetails")}</p>
          </div>
        </motion.div>

        <motion.div
          className="gh-card drilon"
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: reduceMotion ? 0.2 : 0.5, ease: springEase },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: reduceMotion ? 0 : 0.06 }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          whileTap={reduceMotion ? undefined : { scale: 0.995 }}
        >
          <div className="gh-card-content">
            <h3>{t("guesthouseInfo.facilitiesTitle")}</h3>
            <p>{t("guesthouseInfo.facilitiesDetails")}</p>
          </div>
        </motion.div>

        <motion.div
          className="gh-card lake"
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: reduceMotion ? 0.2 : 0.5, ease: springEase },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: reduceMotion ? 0 : 0.12 }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          whileTap={reduceMotion ? undefined : { scale: 0.995 }}
        >
          <div className="gh-card-content">
            <h3>{t("guesthouseInfo.preferedVisitorsTitle")}</h3>
            <p>{t("guesthouseInfo.preferedVisitorsDetails")}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GuesthouseInfoComponent;
