<template>
  <v-card class="elevation-12">
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model.trim="username"
          :error-messages="usernameErrors"
          @keyup.enter="submit"
          prepend-icon="person_outline"
          name="username"
          label="Nazwa użytkownika"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model.trim="email"
          :error-messages="emailErrors"
          @keyup.enter="submit"
          prepend-icon="mail"
          name="email"
          label="E-mail"
          type="email"
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
    <p class="text-xs-center red--text text--accent-2 subheading">{{ feedback }}</p>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="submit" color="#C62828">Zarejestruj</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import {
  usernameErrors,
  emailErrors,
  passwordErrors
} from "@/validations/rules.js";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      feedback: ""
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.$store.dispatch("auth/register", {
          name: this.username,
          email: this.email,
          password: this.password,
          returnSecureToken: true
        });
        this.$router.push("/profile");
        this.$v.$reset();
        this.username = "";
        this.email = "";
        this.password = "";
      } else {
        this.feedback = "Coś poszło nie tak";
      }
    }
  },
  computed: {
    emailErrors,
    passwordErrors,
    usernameErrors
  }
};
</script>

<style scoped>
</style>