const Validator = use("Validator")

module.exports = async function UserValidator ( data ) {
  if (typeof data !== 'object') throw new Error()

  const { username, email, password } = data

  const rules = {
    username: 'required',
    password: 'required|min:8',
    email: 'required|email|unique:users,email'
  }

  const validation = await Validator.validateAll({
    username, email, password
  }, rules)

  return {
    error: validation.messages()
  }
}

