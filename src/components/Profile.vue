<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <v-card class="mt-5">
          <v-img :src="profileCard">
            <v-layout column fill-height>
              <v-spacer></v-spacer>

              <v-card-title class="white--text pl-5">
                <div class="display-2 pl-1">{{ this.$store.state.auth.name }}</div>
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
              <v-list-tile-action>
                <v-btn class="pa-2" color="error" small to="/pass" :disabled="disableBuy">Kup Karnet</v-btn>
              </v-list-tile-action>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile @click.stop>
              <v-list-tile-action>
                <v-icon color="red">mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ this.$store.state.auth.email }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import profileCard from "@/assets/profile_card.jpg";
import buttonDisabled from "@/mixins/button_disabled";

export default {
  name: "Profile",
  mixins: [buttonDisabled],
  data() {
    return {
      profileCard
    };
  }
};
</script>

<style scoped>
</style>