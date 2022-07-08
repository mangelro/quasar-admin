import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import getBrowserLocale from "../utils/get-browser-locale";

const i18n = createI18n({
  locale: getBrowserLocale(), //process.env.VUE_APP_I18N_LOCALE || 'es',
  fallbackLocale: "en",

  //  locale: 'es',
  messages,
});

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});

export { i18n };
