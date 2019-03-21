/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
function usernameErrors() {
  const errors = [];
  if (!this.$v.username.$dirty) return errors;
  !this.$v.username.required && errors.push("Nazwa użytkownika jest wymagana");
  !this.$v.username.minLength && errors.push("Podaj minimum 3 znaki");
  return errors;
}

function emailErrors() {
  const errors = [];
  if (!this.$v.email.$dirty) return errors;
  !this.$v.email.required && errors.push("Adres email jest wymagany");
  !this.$v.email.email && errors.push("Adres email nie jest prawidłowy");
  return errors;
}

function passwordErrors() {
  const errors = [];
  if (!this.$v.password.$dirty) return errors;
  !this.$v.password.required && errors.push("Hasło jest wymagane");
  !this.$v.password.minLength && errors.push("Hasło musi składać się z minimum 6 znaków");
  return errors;
}

export { usernameErrors, emailErrors, passwordErrors };
