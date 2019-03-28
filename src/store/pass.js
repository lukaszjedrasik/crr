/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import authAxios from '@/auth-axios';
import store from '@/store';
import moment from 'moment';

export default {
  namespaced: true,
  state: {
    ticketExpires: null,
  },
  mutations: {
    SET_PASS(state, payload) {
      state.ticketExpires = payload.ticketExpires;
      state.dialog = !payload.dialog;
    },
  },
  actions: {
    async buyTicket({ commit }) {
      const token = localStorage.getItem('token');

      try {
        const { data } = await authAxios.post(
          '/ticket/buy',
          {},
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          },
        );
        const ticket = moment(data.ticketExpires).format('L');
        commit('SET_PASS', {
          ticketExpires: ticket,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
