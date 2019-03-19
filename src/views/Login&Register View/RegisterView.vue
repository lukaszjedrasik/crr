<template>
  <v-card class="elevation-12">
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
        <v-text-field prepend-icon="mail" name="email" label="E-mail" type="email"></v-text-field>
        <v-text-field
          id="password"
          prepend-icon="lock"
          name="password"
          label="Hasło"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#C62828">Zarejestruj</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RegisterView"
};
</script>

<style scoped>
</style>