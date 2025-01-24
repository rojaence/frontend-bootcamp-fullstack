const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  window.location.href = 'http://127.0.0.1:5500/04-html-css-exercises/pages/dashboard.html'
})
