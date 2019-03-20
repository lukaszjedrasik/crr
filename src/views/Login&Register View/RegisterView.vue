<template>
  <v-card class="elevation-12">
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model.trim="name"
          :error-messages="loginErrors"
          @keyup.enter="submit"
          prepend-icon="person"
          name="login"
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
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="submit" :disabled="this.$v.$invalid" color="#C62828">Zarejestruj</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "RegisterView",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  validations: {
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
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("zarejestrowano");
        this.$v.$reset();
        this.name = "";
        this.email = "";
        this.password = "";
      }
    }
  },
  computed: {
    loginErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Nazwa użytkownika musi składać się z minimum 3 znaków");
      !this.$v.name.required && errors.push("Nazwa użytkownika jest wymagana");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("Adres email jest wymagany");
      !this.$v.email.email && errors.push("Adres email nie jest prawidłowy");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Hasło musi składać się z minimum 6 znaków");
      !this.$v.password.required && errors.push("Hasło jest wymagane");
      return errors;
    }
  }
};
</script>

<style scoped>
</style>