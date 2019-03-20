<template>
  <v-card class="elevation-12" dark>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model.trim="name"
          :error-messages="loginErrors"
          @keyup.enter="submit"
          prepend-icon="person"
          name="login"
          label="Login"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model.trim="password"
          :error-messages="passwordErrors"
          @keyup.enter="submit"
          prepend-icon="lock"
          name="password"
          label="Hasło"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="submit" :disabled="this.$v.$invalid" color="#C62828">Zaloguj</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "LoginView",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  validations: {
    name: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("zalogowano");
        this.$v.$reset();
        this.name = "";
        this.password = "";
      }
    }
  },
  computed: {
    loginErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Login jest wymagany");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Hasło jest wymagane");
      return errors;
    }
  }
};
</script>

<style scoped>
</style>