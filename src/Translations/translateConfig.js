import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arabicTranslation from "./Locale/ar.json";
import englishTranslation from "./Locale/en.json";

const resources = {
  en: {
    translation: englishTranslation,
  },
  ar: {
    translation: arabicTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
