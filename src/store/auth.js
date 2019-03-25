/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-return */
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
    UPDATE_TOKEN(state, payload) {
      state.token = payload.token;
      state.userID = payload.userID;
      state.name = payload.name;
    },
  },
  getters: {
    isAuth: state => state.token != null,
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await authAxios.post('api/user/login', payload);
        commit('SET_AUTH', {
          name: response.data.user.name,
          token: response.data.user.token,
          userID: response.data.user.id,
        });
        console.log(response);
        localStorage.setItem('token', response.data.user.token);
        localStorage.setItem('userID', response.data.user.id);
        localStorage.setItem('name', response.data.user.name);
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
        localStorage.setItem('token', response.data.user.token);
        localStorage.setItem('userID', response.data.user.id);
        localStorage.setItem('name', response.data.user.name);
      } catch (e) {
        console.log(e);
      }
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      localStorage.removeItem('userID');
      localStorage.removeItem('name');

      commit('CLEAR_AUTH_DATA');
      router.replace('/');
    },
    autologin({ commit }) {
      const token = localStorage.getItem('token');
      const userID = localStorage.getItem('userID');
      const name = localStorage.getItem('name');

      if (!token) {
        return;
      }

      try {
        authAxios('api/user/refresh', {
          headers: {
            Authorization: `Basic ${token}`,
          },
        });
        commit('UPDATE_TOKEN', {
          token,
          userID,
          name,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
