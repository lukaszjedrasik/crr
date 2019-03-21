<template>
  <v-app dark>
    <v-container fluid column>
      <v-layout justify-center>
        <v-avatar size="180" class="mb-5">
          <img :src="crLogo" alt="Cross Fight Radom logo">
        </v-avatar>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md4 align-self-center>
          <v-tabs centered dark slider-color="#C62828">
            <v-tab @click="componentName = 'Login'" ripple>Zaloguj</v-tab>
            <v-spacer></v-spacer>
            <v-tab @click="componentName = 'Register'" ripple>Zarejestruj</v-tab>
          </v-tabs>

          <transition mode="out-in" enter-active-class="animated flipInY faster">
            <keep-alive>
              <component :is="componentName"></component>
            </keep-alive>
          </transition>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import crLogo from "@/assets/crLogo.jpeg";
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  name: "StartView",
  components: { Login, Register },
  data() {
    return {
      componentName: "Login",
      crLogo
    };
  }
};
</script>

<style scoped lang='scss'>
</style>