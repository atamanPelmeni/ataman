import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend).use(initReactI18next).init({
    fallbackLng: 'ru',
    // debug: true,
    detection: {
        order: ['gueryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n 