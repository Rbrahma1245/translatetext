import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  English: {
    translation: {
      text: { desc: "Hi how are you ?" },
    },
  },
  Hindi: {
    translation: {
      text: { desc: "हैलो, क्या हाल हैं ?" },
    },
  },

  Turkish: {
    translation: {
      text: { desc: "Merhaba nasılsın ?" },
    },
  },
  Japanese: {
    translation: {
      text: { desc: "こんにちは、元気ですか ？" },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "English",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
