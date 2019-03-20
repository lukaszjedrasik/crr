<template>
  <v-card class="elevation-12">
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model.trim="userData.name"
          :error-messages="RegisterNameErrors"
          @keyup.enter="submit"
          prepend-icon="person"
          name="login"
          label="Nazwa użytkownika"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model.trim="userData.email"
          :error-messages="RegisterEmailErrors"
          @keyup.enter="submit"
          prepend-icon="mail"
          name="email"
          label="E-mail"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model.trim="userData.password"
          :error-messages="RegisterPasswordErrors"
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
      <v-btn @click="submit" :disabled="this.$v.$invalid" color="#C62828">Zarejestruj</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import {
  RegisterNameErrors,
  RegisterEmailErrors,
  RegisterPasswordErrors
} from "@/validations/rules.js";
import authAxios from "@/auth-axios.js";

export default {
  name: "Register",
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
    }
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.$store.dispatch("auth/register", {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
          returnSecureToken: true
        });
      }
      this.$v.$reset();
      this.userData.name = "";
      this.userData.email = "";
      this.userData.password = "";
    }
  },
  computed: {
    RegisterNameErrors,
    RegisterEmailErrors,
    RegisterPasswordErrors
  }
};
</script>

<style scoped>
</style>