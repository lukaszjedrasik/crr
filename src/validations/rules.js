/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
function LoginNameErrors() {
  const errors = [];
  if (!this.$v.userData.name.$dirty) return errors;
  !this.$v.userData.name.required && errors.push("Login jest wymagany");
  return errors;
}

function LoginEmailErrors() {
  const errors = [];
  if (!this.$v.userData.email.$dirty) return errors;
  !this.$v.userData.email.required && errors.push("Adres email jest wymagany");
  !this.$v.userData.email.email && errors.push("Adres email nie jest prawidłowy");
  return errors;
}

function LoginPasswordErrors() {
  const errors = [];
  if (!this.$v.userData.password.$dirty) return errors;
  !this.$v.userData.password.required && errors.push("Hasło jest wymagane");
  return errors;
}

function RegisterNameErrors() {
  const errors = [];
  if (!this.$v.userData.name.$dirty) return errors;
  !this.$v.userData.name.minLength &&
    errors.push("Nazwa użytkownika musi składać się z minimum 3 znaków");
  !this.$v.userData.name.required && errors.push("Nazwa użytkownika jest wymagana");
  return errors;
}

function RegisterEmailErrors() {
  const errors = [];
  if (!this.$v.userData.email.$dirty) return errors;
  !this.$v.userData.email.required && errors.push("Adres email jest wymagany");
  !this.$v.userData.email.email && errors.push("Adres email nie jest prawidłowy");
  return errors;
}

function RegisterPasswordErrors() {
  const errors = [];
  if (!this.$v.userData.password.$dirty) return errors;
  !this.$v.userData.password.minLength && errors.push("Hasło musi składać się z minimum 6 znaków");
  !this.$v.userData.password.required && errors.push("Hasło jest wymagane");
  return errors;
}

export {
  LoginNameErrors,
  LoginEmailErrors,
  LoginPasswordErrors,
  RegisterNameErrors,
  RegisterEmailErrors,
  RegisterPasswordErrors
};
