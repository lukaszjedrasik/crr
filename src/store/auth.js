/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import authAxios from '@/auth-axios';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    name: null,
    token: null,
    userID: null,
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.name = payload.name;
      state.token = payload.token;
      state.userID = payload.userID;
    },
    CLEAR_AUTH_DATA(state) {
      state.name = null;
      state.token = null;
      state.userID = null;
    },
  },
  getters: {
    isAuth: state => state.token !== null,
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await authAxios.post('/api/user/login', payload);
        commit('SET_AUTH', {
          name: response.data.user.name,
          token: response.data.user.token,
          userID: response.data.user.id,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
    async register({ commit }, payload) {
      try {
        const response = await authAxios.post('/api/user/register', payload);
        commit('SET_AUTH', {
          name: response.data.user.name,
          token: response.data.user.token,
          userID: response.data.user.id,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
    logout({ commit }) {
      commit('CLEAR_AUTH_DATA');
      router.replace('/');
    },
  },
};
