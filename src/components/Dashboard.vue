<template>
  <v-container>
    <NavView class="mb-5"></NavView>
    <router-view></router-view>
  </v-container>
</template>

<script>
import NavView from "@/views/NavView";

export default {
  name: "Dashboard",
  components: { NavView }
};
</script>

<style scoped>
</style>