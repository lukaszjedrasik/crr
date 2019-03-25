<template>
  <div>
    <v-toolbar app clipped-left fixed>
      <v-toolbar-side-icon @click.stop="sideMenu = !sideMenu"></v-toolbar-side-icon>
      <v-list-tile-avatar size="45">
        <img :src="crLogo" alt="Cross Fight Radom logo">
      </v-list-tile-avatar>
      <v-toolbar-title class="font-weight-light font-italic">
        <router-link to="/profile" tag="li">Cross Fight Radom</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/profile" flat small active-class="active">
          <v-icon left>person</v-icon>Profil
        </v-btn>
        <v-btn @click="logout" flat small>
          Wyloguj
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="sideMenu" app dark absolute temporary>
      <v-list>
        <v-list-tile class="mb-2 font-weight-light">
          <v-list-tile-avatar size="55" class="mr-4">
            <img :src="crLogo" alt="Cross Fight Radom logo" to="/profile">
          </v-list-tile-avatar>Cross Fight Radom
          <v-btn @click="logout" color="error" small flat>
            <v-icon>exit_to_app</v-icon>
          </v-btn>
        </v-list-tile>
        <v-divider class="mb-3"></v-divider>

        <v-list-tile
          @click.prevent="chooseBookmarks(index)"
          v-for="(item,index) in sideMenuLinks"
          :key="item.name"
        >
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
        { name: "Aktualności", icon: "fiber_new" },
        { name: "Rozkład zajęć", icon: "calendar_today" },
        { name: "Czat", icon: "chat" },
        { name: "Karnet", icon: "credit_card" },
        { name: "Profil", icon: "person" }
      ],
      crLogo
    };
  },
  methods: {
    chooseBookmarks(index) {
      const link = this.sideMenuLinks[index].name;
      switch (link) {
        case "Rozkład zajęć":
          this.$router.push("/schedule");
          break;
        case "Czat":
          this.$router.push("/chat");
          break;
        case "Karnet":
          this.$router.push("/pass");
          break;
        case "Profil":
          this.$router.push("/profile");
          break;
        default:
          break;
      }
    },
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>

<style scoped lang='scss'>
li {
  list-style-type: none;
  cursor: pointer;
}
</style>