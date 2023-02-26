import { createApp } from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps';
import './assets/main.scss'

const app = createApp(App);

const settings = {
  apiKey: '2202bfa0-dd99-45bd-996c-2c58c9e66eaf',
  lang: 'ru_RU',
  enterprise: false,
  version: '2.1',
};

app.use(YmapPlugin, settings);
app.mount("#app");
