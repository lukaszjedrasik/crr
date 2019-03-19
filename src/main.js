import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
