import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "./assets/logo.png",
  loading: "./assets/logo.png",
  attempt: 1,
});

Vue.config.productionTip = false;

import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
