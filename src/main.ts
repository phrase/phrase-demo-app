import { createApp } from "vue";
import App from "./App.vue";
import { initializeI18next } from "./i18n";
import "normalize.css/normalize.css";

const app = createApp(App);

initializeI18next({
  projectId: "00000000000000004158e0858d2fa45c",
  accountId: "0bed59e5",
});

app.mount("#app");
