import Vue from "vue";
import App from "./App.vue";
import configure from "./config";

Vue.config.productionTip = false;

configure(Vue);

new Vue({
  render: h => h(App)
}).$mount("#app");
