import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { common: require('../language/en.json') },
            ar: { common: require('../language/ar.json') },
        },
        fallbackLng: 'ar',
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupQuerystring: 'lng',
        },
        react: { useSuspense: false },
    });

export function setLanguageFromLocale(locale: string) {
    if (i18n.language !== locale) {
        i18n.changeLanguage(locale);
    }
}

export default i18n;
