<template>
  <v-card class="elevation-12" dark>
    <v-card-text>
      <v-form ref="form">
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
      <v-btn @click="submit" color="#C62828">Zaloguj</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { emailErrors, passwordErrors } from "@/validations/rules.js";
import store from "@/store";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      feedback: "Musisz się zalogować, aby przejść dalej."
    };
  },
  validations: {
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
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        });
        this.$v.$reset();
        this.email = "";
        this.password = "";

        if (this.$store.getters["auth/isAuth"]) {
          this.$router.push("/profile");
        } else {
          this.feedback = "Niepoprawne dane";
        }
      }
    }
  },
  computed: {
    emailErrors,
    passwordErrors
  }
};
</script>

<style scoped>
</style>