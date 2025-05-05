import { createApp } from "vue";
import App from "./App.vue";
import { initializeI18next } from "./i18n";
import "normalize.css/normalize.css";

const app = createApp(App);

let params = new URLSearchParams(document.location.search);
let version = params.get("version");

if (version === "private") {
  // Private trial account
  initializeI18next({
    projectId: "aade46a6581311e26d892ef5a11df0a9",
    accountId: "57a99e89e4ee5de2594afa2ab6cdc4c7",
  });
} else {
  // Demo account
  initializeI18next({
    projectId: "00000000000000004158e0858d2fa45c",
    accountId: "0bed59e5",
  });
}

app.mount("#app");
