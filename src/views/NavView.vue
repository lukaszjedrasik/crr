<template>
  <div>
    <v-toolbar app clipped-left fixed>
      <v-toolbar-side-icon @click.stop="sideMenu = !sideMenu"></v-toolbar-side-icon>
      <v-list-tile-avatar>
        <img :src="crLogo" alt="Cross Fight Radom logo">
      </v-list-tile-avatar>
      <v-toolbar-title class="font-weight-light font-italic">Cross Fight Radom</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat small>
          <v-icon small left>person_add</v-icon>Zaloguj
        </v-btn>
        <v-btn flat small>Zarejestruj
          <v-icon small right>person_add</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="sideMenu" app dark>
      <v-list>
        <v-list-tile class="mb-2 font-weight-light font-italic">
          <v-list-tile-avatar>
            <img :src="crLogo" alt="Cross Fight Radom logo">
          </v-list-tile-avatar>Cross Fight Radom
        </v-list-tile>
        <v-divider class="mb-3"></v-divider>

        <v-list-tile @click.prevent v-for="item in sideMenuLinks" :key="item.name">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import crLogo from "@/assets/crLogo.jpeg";

export default {
  name: "NavView",
  data() {
    return {
      sideMenu: null,
      sideMenuLinks: [
        { name: "Rozkład zajęć", icon: "calendar_today" },
        { name: "Czat", icon: "chat" }
      ],
      crLogo
    };
  }
};
</script>

<style scoped lang='scss'>
</style>