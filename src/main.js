import Vue from 'vue'
import App from './App.vue'
import { store } from "./store/store";
import { rouete } from "./routes";
import VueRouter from 'vue-router'

Vue.config.productionTip = false


Vue.use(VueRouter)
const router = new VueRouter({
  rouete,
  mode: 'history'
});

new Vue({
  el:'#app',
  router,
  render: h => h(App),
  store,

}).$mount('#app')
