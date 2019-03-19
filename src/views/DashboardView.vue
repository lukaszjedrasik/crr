<template>
  <v-container>
    <NavView class="mb-5"></NavView>
    <v-layout>
      <v-flex></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NavView from "@/views/NavView";

export default {
  name: "DashboardView",
  components: { NavView }
};
</script>

<style scoped>
</style>