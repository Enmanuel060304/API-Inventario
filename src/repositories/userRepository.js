import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '../utils/config.js'
import { UserModel } from '../models/user.model.js'

export class UserRepository {
  async registerUser (data) {
    const { name, username, password } = data

    const user = await UserModel.findOne({ username })
    if (user) throw new Error('username en uso')

    const hashPassword = await bcrypt.hash(password, Number(SALT_ROUNDS))
    const newUser = new UserModel({
      username,
      name,
      passwordHash: hashPassword
    })
    console.log('repository data', newUser)

    const response = await newUser.save()
    return response
  }

  async loginUser (data) {
    const { password } = data
    const passwordhash = '$2b$10$cXqZKYhkcgIJL5Uyhita..65ZfQksqZ4ZP3Ui/DGE4.vfIf7hPow6'
    const match = bcrypt.compareSync(password, passwordhash)
    // const match = await UserModel.deleteMany({})
    return match
  }
}
