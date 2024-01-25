import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadingPage from "@/components/LoadingPage.vue";

Vue.config.productionTip = false

Vue.component("LoadingPage", LoadingPage);

Vue.filter("currencyPrice", value => {
  value = Number(value);
  if (!isNaN(Number(value))) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  return "";
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
