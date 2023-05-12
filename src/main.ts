import { createApp } from 'vue'
import App from './App.vue'
import { initializeI18next } from './i18n'
import 'normalize.css/normalize.css'

const app = createApp(App);
initializeI18next()

app.mount('#app');
