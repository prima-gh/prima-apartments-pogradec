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
import './index.css';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      al: { translation: al },
      en: { translation: en },
      de: { translation: de },
    },
    lng: 'en', // Set the default language
    interpolation: {
      escapeValue: false,
    },
  });
  
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);