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
    passwordField.querySelector('input').classList.add('is-danger')
    passwordField.querySelector('.invalid-feedback').classList.remove('is-hidden')
    passwordField.querySelector('input').classList.remove('is-success')
  } else {
    console.log('vlido')
    passwordField.querySelector('.invalid-feedback').classList.add('is-hidden')
    passwordField.querySelector('input').classList.remove('is-danger')
    passwordField.querySelector('input').classList.add('is-success')
  }
}

const setEmailInputError = () => {
  const validation = AuthService.validate(emailInput.value, passwordInput.value)
  const emailField = loginForm.querySelector('#email-field')
  if (validation.errors.email) {
    emailField.querySelector('.invalid-feedback').textContent = validation.errors.email
    emailField.querySelector('.invalid-feedback').classList.remove('is-hidden')
    emailField.querySelector('input').classList.add('is-danger')
    emailField.querySelector('input').classList.remove('is-success')
  } else {
    emailField.querySelector('input').classList.remove('is-danger')
    emailField.querySelector('input').classList.add('is-success')
    emailField.querySelector('.invalid-feedback').classList.add('is-hidden')
  }
}
