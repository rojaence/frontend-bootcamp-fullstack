import { AuthService } from '../authService.js'

const loginForm = document.getElementById('login-form')
const passwordInput = document.getElementById('user-password')
const emailInput = document.getElementById('user-email')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!loginForm.checkValidity()) {
    e.preventDefault()
    e.stopPropagation()
  }
  const form = new FormData(e.target)
  const email = form.get('email')
  const password = form.get('password')

  const validation = AuthService.validate(email, password)
  setEmailInputError()
  setPasswordInputError()
  if (validation.success) {
    window.location.href = 'http://127.0.0.1:5500/04-html-css-exercises/pages/dashboard.html'
  }
  // loginForm.classList.add('was-validated')
})

document.querySelector('#user-password').addEventListener('input', (e) => {
  setPasswordInputError()
})
document.querySelector('#user-email').addEventListener('input', (e) => {
  setEmailInputError()
})

const setPasswordInputError = () => {
  const validation = AuthService.validate(emailInput.value, passwordInput.value)
  const passwordField = loginForm.querySelector('#password-field')
  if (validation.errors.password) {
    passwordField.querySelector('.invalid-feedback').textContent = validation.errors.password
    passwordField.querySelector('input').classList.add('is-invalid')
  } else {
    passwordField.querySelector('input').classList.remove('is-invalid')
    passwordField.querySelector('input').classList.add('is-valid')
  }
}

const setEmailInputError = () => {
  const validation = AuthService.validate(emailInput.value, passwordInput.value)
  const emailField = loginForm.querySelector('#email-field')
  if (validation.errors.email) {
    emailField.querySelector('.invalid-feedback').textContent = validation.errors.email
    emailField.querySelector('input').classList.add('is-invalid')
  } else {
    emailField.querySelector('input').classList.remove('is-invalid')
    emailField.querySelector('input').classList.add('is-valid')
  }
}
