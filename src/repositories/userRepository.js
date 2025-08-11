import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SALT_ROUNDS, JWT_SECRET, JWT_EXPIRES_IN } from '../utils/config.js'
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
    const { username, password } = data

    const user = await UserModel.findOne({ username })

    if (!user) throw new Error('Usuario o contraseña incorrecta')

    const match = await bcrypt.compare(password, user.passwordHash)

    if (!match) throw new Error('Usuario o contraseña incorrecta')

    const token = jwt.sign({ id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    return token
  }
}
