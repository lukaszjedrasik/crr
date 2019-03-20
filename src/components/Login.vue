<template>
  <v-card class="elevation-12" dark>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model.trim="userData.name"
          :error-messages="LoginNameErrors"
          @keyup.enter="submit"
          prepend-icon="person"
          name="login"
          label="Login"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model.trim="userData.email"
          :error-messages="LoginEmailErrors"
          @keyup.enter="submit"
          prepend-icon="mail"
          name="email"
          label="E-mail"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model.trim="userData.password"
          :error-messages="LoginPasswordErrors"
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
import { required, minLength, email } from "vuelidate/lib/validators";
import {
  LoginNameErrors,
  LoginEmailErrors,
  LoginPasswordErrors
} from "@/validations/rules.js";
import authAxios from "@/auth-axios.js";

export default {
  name: "Login",
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  validations: {
    userData: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.$store.dispatch("auth/login", {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
          returnSecureToken: true,
          isAdmin: this.isAdmin
        });
      }
      this.$v.$reset();
      this.userData.name = "";
      this.userData.email = "";
      this.userData.password = "";
    }
  },
  computed: {
    LoginNameErrors,
    LoginEmailErrors,
    LoginPasswordErrors
  }
};
</script>

<style scoped>
</style>