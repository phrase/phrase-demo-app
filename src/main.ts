import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import i18n from './i18n'

i18n(createApp(App)).mount('#app');
