import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";

import VueGtag from "vue-gtag-next";

import "./styles/main.scss";
import "./registerServiceWorker";

const app = createApp(App);

app.use(store);

if (process.env.VUE_APP_GA_MEASUREMENT_ID) {
  app.use(VueGtag, { property: { id: process.env.VUE_APP_GA_MEASUREMENT_ID } });
}

app.mount("#app");
