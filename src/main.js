import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";

import "./styles/main.scss";
import './registerServiceWorker'

createApp(App)
  .use(store)
  .mount("#app");
