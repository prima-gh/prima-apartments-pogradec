import React, { useMemo } from "react";
import { CheckCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./house-rules.css";

const springEase = [0.22, 1, 0.36, 1] as const;

const RULE_KEYS = [
  "ruleReservations",
  "rule1",
  "rule2",
  "rule3",
] as const;

const DISTANCES: { line: string }[] = [
  { line: "Drilon, Albania: 5 km" },
  { line: "Saint Naum, North Macedonia: 11km" },
  { line: "Lin, Albania: 20 km" },
  { line: "Korçë, Albania: 40 km" },
  { line: "Ohrid, North Macedonia: 40 km" },
  { line: "Struga, North Macedonia: 40 km" },
  { line: "Ohrid Airport, North Macedonia: 47 km" },
  { line: "Dardhe, Albania: 57 km" },
  { line: "Voskopojë, Albania: 57 km" },
  { line: "Tirana, Albania: 125 km" },
  { line: "Rinas Tirana Airport, Albania: 140 km" },
];

const HouseRulesComponent = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const listParent: Variants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.07,
          delayChildren: reduceMotion ? 0 : 0.08,
        },
      },
    }),
    [reduceMotion]
  );

  const listItem: Variants = useMemo(
    () => ({
      hidden: reduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 14, filter: "blur(4px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: reduceMotion ? 0.15 : 0.42, ease: springEase },
      },
    }),
    [reduceMotion]
  );

  const panelVariants: Variants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.98 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: reduceMotion ? 0.2 : 0.55, ease: springEase },
      },
    }),
    [reduceMotion]
  );

  const panelVariantsDelayed: Variants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.98 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: reduceMotion ? 0.2 : 0.55,
          ease: springEase,
          delay: reduceMotion ? 0 : 0.1,
        },
      },
    }),
    [reduceMotion]
  );

  return (
    <motion.section
      className="house-rules-root"
      aria-labelledby="house-rules-heading"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: springEase }}
    >
      <div className="house-rules-grid">
        <motion.article
          className="house-rules-panel house-rules-panel--rules"
          variants={panelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px", amount: 0.25 }}
          whileHover={reduceMotion ? undefined : { y: -3 }}
        >
          <div className="house-rules-panel-glow" aria-hidden="true" />
          <header className="house-rules-panel-head">
            <span className="house-rules-panel-icon house-rules-panel-icon--rules" aria-hidden>
              <CheckCircleOutlined />
            </span>
            <div className="house-rules-panel-titles">
              <h4 id="house-rules-heading">{t("houseRules.houseRules")}</h4>
              <p className="house-rules-panel-sub">{t("houseRules.panelRulesHint")}</p>
            </div>
          </header>
          <motion.ul
            className="house-rules-list"
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {RULE_KEYS.map((key) => (
              <motion.li key={key} className="house-rules-list-item" variants={listItem}>
                <span className="house-rules-list-accent" aria-hidden />
                <span className="house-rules-list-text">{t(`houseRules.${key}`)}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.article>

        <motion.article
          className="house-rules-panel house-rules-panel--distance"
          variants={panelVariantsDelayed}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px", amount: 0.25 }}
          whileHover={reduceMotion ? undefined : { y: -3 }}
        >
          <div className="house-rules-panel-glow house-rules-panel-glow--accent" aria-hidden="true" />
          <header className="house-rules-panel-head">
            <span className="house-rules-panel-icon house-rules-panel-icon--distance" aria-hidden>
              <EnvironmentOutlined />
            </span>
            <div className="house-rules-panel-titles">
              <h4>{t("houseRules.distance")}</h4>
              <p className="house-rules-panel-sub">{t("houseRules.panelDistanceHint")}</p>
            </div>
          </header>
          <motion.ul
            className="house-rules-list house-rules-list--distance"
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {DISTANCES.map((row, i) => (
              <motion.li
                key={i}
                className="house-rules-list-item house-rules-list-item--distance"
                variants={listItem}
              >
                <span className="house-rules-km-dot" aria-hidden />
                <span className="house-rules-list-text">{row.line}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.article>
      </div>
    </motion.section>
  );
};

export default HouseRulesComponent;
