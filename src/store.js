import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/auth';
import pass from '@/store/pass';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    pass,
  },
});
