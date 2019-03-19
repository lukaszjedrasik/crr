<template>
  <v-app dark>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-tabs centered dark slider-color="#C62828">
              <v-tab @click="componentName = 'LoginView'" ripple>Zaloguj</v-tab>
              <v-spacer></v-spacer>
              <v-avatar size="43" class="pt-1">
                <img :src="crLogo" alt="Cross Fight Radom logo">
              </v-avatar>
              <v-spacer></v-spacer>
              <v-tab @click="componentName = 'RegisterView'" ripple>Zarejestruj</v-tab>
            </v-tabs>

            <transition mode="out-in" enter-active-class="animated flipInY faster">
              <keep-alive>
                <component :is="componentName"></component>
              </keep-alive>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import crLogo from "@/assets/crLogo.jpeg";
import LoginView from "@/views/Login&Register View/LoginView";
import RegisterView from "@/views/Login&Register View/RegisterView";

export default {
  name: "HomeView",
  components: { LoginView, RegisterView },
  data() {
    return {
      componentName: "LoginView",
      crLogo
    };
  }
};
</script>

<style scoped>
</style>