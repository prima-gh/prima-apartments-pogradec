import React, { FC, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FloatButton } from 'antd';
import { LanguageEnum } from '../../utils/enums';
import './header.css';

const AlFlag = require('../../assets/icons/al-flag.png');
const EnFlag = require('../../assets/icons/en-flag.png');
const DeFlag = require('../../assets/icons/de-flag.png');
const HomeIcon = require('../../assets/icons/home-icon.png');

function languageEnumFromLng(lng?: string): LanguageEnum {
  const code = (lng ?? 'al').split('-')[0].toLowerCase();
  if (code === LanguageEnum.DE) return LanguageEnum.DE;
  if (code === LanguageEnum.EN) return LanguageEnum.EN;
  return LanguageEnum.AL;
}

export const HeaderComponent: FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<LanguageEnum>(() =>
    languageEnumFromLng(i18n.language)
  );
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sync = () => setLanguage(languageEnumFromLng(i18n.language));
    i18n.on('languageChanged', sync);
    sync();
    return () => {
      i18n.off('languageChanged', sync);
    };
  }, [i18n]);

  const changeLanguage = (next: LanguageEnum) => {
    void i18n.changeLanguage(next);
  };

  const mapLanguageIcon = (): JSX.Element => {
    if(language === LanguageEnum.AL) {
      return (
        <img src={AlFlag} height={18} width={18} alt="AL" />
      )
    } else if (language === LanguageEnum.DE) {
      return (
        <img src={DeFlag} height={18} width={18} alt="DE" />
      )
    } else {
      return (
        <img src={EnFlag} height={18} width={18} alt="EN" />
      )
    }
  }

  return (
    <div className="site-header-full">
      <motion.div
        className="header-container"
        initial={reduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.05 }}
        >
          <img src={HomeIcon} height={48} width={48} alt="" />
        </motion.div>

        <motion.div
          className="welcome-text"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.1 }}
        >
          {t('header.welcome')}
        </motion.div>

        <div>
        </div>
      </motion.div>

      <FloatButton.Group
        trigger="hover"
        icon={mapLanguageIcon()}
      >
        <FloatButton
          onClick={() => changeLanguage(LanguageEnum.AL)}
          icon={<img src={AlFlag} height={18} width={18} alt="AL" />}
        />        

        <FloatButton
          onClick={() => changeLanguage(LanguageEnum.EN)}
          icon={<img src={EnFlag} height={18} width={18} alt="EN" />}
        />     

        <FloatButton
          onClick={() => changeLanguage(LanguageEnum.DE)}
          icon={<img src={DeFlag} height={18} width={18} alt="DE" />}
        />     
      </FloatButton.Group>
      <FloatButton.BackTop style={{right: 75}} />
    </div>
  )
}
