<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1
          class="text-xs-center display-1 red--text text--darken-3 py-3 font-weight-thin"
        >Rozkład zajęć</h1>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-flex></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Schedule",
  data() {
    return {
      days: ["Poniedziałek", "W"]
    };
  }
};
</script>

<style scoped>
</style>