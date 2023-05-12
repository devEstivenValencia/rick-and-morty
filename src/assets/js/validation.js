const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNumero = /\d/

export default function validate({ email, password }) {
  let errors = {}

  !email ? errors.email = "Enter your user" :
    email.length > 35 ? errors.email = "Must not exceed 35 characters" :
      !regexEmail.test(email) ? errors.email = "Invalid User" : errors.email = "Valid User"

  password.length < 6 ? errors.password = "Very short password" :
    password.length > 10 ? errors.password = "Very long password" :
      !regexNumero.test(password) ? errors.password = "Must contain at least one number" : errors.password = "Valid Password"

  return errors
} 