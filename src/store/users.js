/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import moment from 'moment';
import 'moment/locale/pl';

export default {
  namespaced: true,
  state: {
    users: [
      {
        name: 'Łukasz Jędrasik',
        email: 'lukaszj93@onet.eu',
        password: 'ekspert1',
        ticket: null,
      },
    ],
  },
  mutations: {
    BUY_TICKET(state) {
      if (!state.users[0].ticket) {
        state.users[0].ticket = moment().format('L');
      } else if (state.users[0].ticket <= moment().format('L')) {
        state.users[0].ticket = moment()
          .add(30, 'days')
          .calendar();
      }
      console.log(state.users[0].ticket);
    },
  },
};
