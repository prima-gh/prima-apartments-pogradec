import React from "react";
import { useTranslation } from "react-i18next";
import "./house-rules.css";

const HouseRulesComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="house-rules-root">
      <div className="container">
        <div className="column">
          <h4>{t('houseRules.houseRules')}</h4>
          <ul style={{ textAlign: "justify" }}>
            <li>{t('houseRules.ruleReservations')}</li>
            <li>{t('houseRules.rule1')}</li>
            <li>{t('houseRules.rule2')}</li>
            <li>{t('houseRules.rule3')}</li>
          </ul>
        </div>
        <div className="column">
          <h4>{t('houseRules.distance')}</h4>
          <ul style={{ textAlign: "justify" }}>
            <li>Drilon, Albania: 5 km</li>
            <li>Saint Naum, North Macedonia: 11km</li>
            <li>Lin, Albania: 20 km</li>
            <li>Korçë, Albania: 40 km</li>
            <li>Ohrid, North Macedonia: 40 km</li>
            <li>Struga, North Macedonia: 40 km</li>
            <li>Ohrid Airport, North Macedonia: 47 km</li>
            <li>Dardhe, Albania: 57 km</li>
            <li>Voskopojë, Albania: 57 km</li>
            <li>Tirana, Albania: 125 km</li>
            <li>Rinas Tirana Airport, Albania: 140 km</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseRulesComponent;
