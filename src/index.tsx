import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US'; // Import locale for English (you can change this as needed)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';
import al from './locales/al.json';
import { getStoredLanguage, persistLanguage } from './i18n/language-storage';
import './index.css';

const initialLng = getStoredLanguage();

i18n.use(initReactI18next).init({
  resources: {
    al: { translation: al },
    en: { translation: en },
    de: { translation: de },
  },
  lng: initialLng,
  fallbackLng: 'al',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  persistLanguage(lng);
});
  
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      locale={enUS}
      theme={{
        token: {
          colorPrimary: "#15939e",
          colorInfo: "#3dbfb8",
          colorLink: "#117a84",
          borderRadiusLG: 12,
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);