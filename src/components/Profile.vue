<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8>
        <v-card class="mt-5">
          <v-img :src="profileCard">
            <v-layout column fill-height>
              <v-spacer></v-spacer>

              <v-card-title class="white--text pl-5">
                <div class="display-2 pl-1">Imie Nazwisko</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <v-list-tile @click.stop>
              <v-list-tile-action>
                <v-icon color="red">credit_card</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Karnet nr: xxx</v-list-tile-title>
                <v-list-tile-sub-title>Ważny do: xx-xx-xxxx</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile @click.stop>
              <v-list-tile-action>
                <v-icon color="red">mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>example@example.com</v-list-tile-title>
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

export default {
  name: "Profile",
  data() {
    return {
      profileCard
    };
  }
};
</script>

<style scoped>
</style>