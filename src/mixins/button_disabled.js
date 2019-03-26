import 'moment/locale/pl';
import moment from 'moment';

export default {
  computed: {
    disableBuy() {
      return this.$store.state.pass.ticketExpires < moment().format('L');
    },
  },
};
