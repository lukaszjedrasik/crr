<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <v-card class="mt-5">
          <v-img :src="pass" height="300">
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="white--text pl-5">
                <div class="display-2 pl-1">Karnet</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <v-list-tile @click.stop>
              <v-list-tile-action>
                <v-icon color="red">credit_card</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Karnet wazny do:</v-list-tile-title>
                <v-list-tile-sub-title>{{ ticket }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>
            <v-layout justify-end>
              <v-btn @click="buyTicket" color="error" class="ma-3" :disabled="disableBuy">Kup Karnet</v-btn>
            </v-layout>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import pass from "@/assets/pass.jpg";
import moment from "moment";
import "moment/locale/pl";

export default {
  name: "Pass",
  data() {
    return {
      pass
    };
  },
  methods: {
    buyTicket() {
      this.$store.commit("users/BUY_TICKET");
    }
  },
  computed: {
    ticket() {
      return this.$store.state.users.users[0].ticket;
    },
    disableBuy() {
      return this.$store.state.users.users[0].ticket < moment().format("L");
    }
  }
};
</script>

<style scoped>
</style>