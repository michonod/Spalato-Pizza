import i18n from 'i18next';
import en from './../public/locales/en/en.json'
import mk from './../public/locales/mk/mk.json'
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
    en: {
        translation: en
    },
    mk: {
        translation: mk
    }
};



i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        lng: 'mk'
    });


export default i18n;