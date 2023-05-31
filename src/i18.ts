import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//ALL FILES
import translationEnglish from "Translation/English/translation.json";
import translationSpanish from "Translation/Spanish/translation.json";
import translationJapanese from "Translation/Japanese/translation.json";
import translationGujarati from "Translation/Gujarati/translation.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  es: {
    translation: translationSpanish,
  },
  ja: {
    translation: translationJapanese,
  },
  gu: {
    translation: translationGujarati,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
});

export default i18n;
