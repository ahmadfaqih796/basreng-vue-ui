import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Vue from "vue";
import router from "./routers";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
