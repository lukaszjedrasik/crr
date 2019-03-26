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
                <v-list-tile-sub-title>{{ this.$store.state.pass.ticketExpires }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>
            <v-layout justify-end>
              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on }">
                  <v-btn v-if="!disableBuy" color="error" class="ma-3" v-on="on">Kup Karnet</v-btn>
                </template>
                <v-card class="pa-3">
                  <v-card-title class="headline text-xs-center">Cross Fight Radom Karnet</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color @click="dialog = false">Anuluj</v-btn>
                    <v-btn color="error" @click="buyTicket">Kup/Przedłuż</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import pass from "@/assets/pass.jpg";
import buttonDisabled from "@/mixins/button_disabled";

export default {
  name: "Pass",
  mixins: [buttonDisabled],
  data() {
    return {
      pass,
      dialog: false
    };
  },
  methods: {
    async buyTicket() {
      this.$store.dispatch("pass/buyTicket");
      this.dialog = false;
    }
  }
};
</script>

<style scoped>
</style>