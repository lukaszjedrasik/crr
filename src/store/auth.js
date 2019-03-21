/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import authAxios from '@/auth-axios';

export default {
  namespaced: true,
  state: {
    token: null,
    userID: null,
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.token = payload.token;
      state.userID = payload.userID;
    },
  },
  getters: {
    isAuth: state => state.token !== null,
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await authAxios.post(
          'verifyPassword?key=AIzaSyCU4A3q_-s3UEqJRJZAmB7q2CT-RCGC0-k',
          payload,
        );
        commit('SET_AUTH', {
          token: response.data.idToken,
          userID: response.data.localId,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async register({ commit }, payload) {
      try {
        const response = await authAxios.post(
          'signupNewUser?key=AIzaSyCU4A3q_-s3UEqJRJZAmB7q2CT-RCGC0-k',
          payload,
        );
        commit('SET_AUTH', {
          token: response.data.idToken,
          userID: response.data.localId,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
