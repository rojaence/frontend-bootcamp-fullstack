export class AuthService {
  static emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  static passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  static validate(email, password) {
    let validation = {
      success: true,
      errors: {
        email: '',
        password: ''
      }
    }
    if (!email) {
      validation.success = false
      validation.errors.email = 'Email requerido'
    }

    if (!password) {
      validation.success = false
      validation.errors.password = 'Contraseña requerida'
    }

    if (email && !this.emailRegex.test(email)) {
      validation.success = false
      validation.errors.email = 'Email no válido'
    }

    if (password && !this.passwordRegex.test(password)) {
      validation.success = false
      validation.errors.password = 'Mínimo 8 caracteres. Al menos un número'
    }

    return validation
  }
}
