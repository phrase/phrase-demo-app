import { createApp } from "vue";
import App from "./App.vue";
import { initializeDemoI18next, initializePrivateI18next } from "./i18n";
import "normalize.css/normalize.css";

const app = createApp(App);

let params = new URLSearchParams(document.location.search);
let version = params.get("version"); // is the string "Jonathan"

if (version === "private") {
  initializePrivateI18next();
} else {
  initializeDemoI18next();
}

app.mount("#app");
