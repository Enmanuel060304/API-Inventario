import bcrypt from 'bcrypt'
const saltRounds = 10

export class UserRepository {
  registerUser (data) {
    data.password = bcrypt.hashSync(data.password, saltRounds)
    console.log('repository data', data)
    return {
      message: 'usuario creado con la data',
      ...data
    }
  }

  loginUser (data) {
    const { password } = data
    const passwordhash = '$2b$10$cXqZKYhkcgIJL5Uyhita..65ZfQksqZ4ZP3Ui/DGE4.vfIf7hPow6'
    const match = bcrypt.compareSync(password, passwordhash)
    return match
  }
}
