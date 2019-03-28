import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueChatScroll from 'vue-chat-scroll';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(VueChatScroll);

store.dispatch('auth/autologin');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
