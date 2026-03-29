import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FloatButton } from 'antd';
import { LanguageEnum } from '../../utils/enums';
import './header.css';

const AlFlag = require('../../assets/icons/al-flag.png');
const EnFlag = require('../../assets/icons/en-flag.png');
const DeFlag = require('../../assets/icons/de-flag.png');
const HomeIcon = require('../../assets/icons/home-icon.png');

export const HeaderComponent: FC = () => {
  const [language, setLanguage] = useState<LanguageEnum>(LanguageEnum.EN)
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const changeLanguage = (language: LanguageEnum) => {
    setLanguage(language)
    i18n.changeLanguage(language);
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
    <>
      <div className="header-container">
        <div>
          <img src={HomeIcon} height={48} width={48} alt="AL" />
        </div>

        <div className="welcome-text">{t('header.welcome')}</div>

        <div>
        </div>
      </div>

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
    </>
  )
}
