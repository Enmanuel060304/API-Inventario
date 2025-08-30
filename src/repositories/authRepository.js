import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SALT_ROUNDS, JWT_SECRET, JWT_EXPIRES_IN } from '../utils/config.js'
import Usuario from '../models/mssqlModels/usuarios.model.js'

export class UserRepository {
  async registerUser (data) {
    const { name, username, password } = data

    const user = await Usuario.findOne({ where: { username } })

    console.log(user)

    if (user) throw new Error('username en uso')

    const hashPassword = await bcrypt.hash(password, Number(SALT_ROUNDS))

    const newUser = await Usuario.create({
      name,
      username,
      passwordHash: hashPassword
    })
    return newUser
  }

  async loginUser (data) {
    const { username, password } = data
    console.log('loginUser data', data)

    const user = await Usuario.findOne({ where: { username } })
    if (!user) throw new Error('Usuario o contraseña incorrecta')

    const match = await bcrypt.compare(password, user.dataValues.passwordHash)

    if (!match) throw new Error('Usuario o contraseña incorrecta')

    const token = jwt.sign({ id: user.dataValues.id, username: user.dataValues.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    return token
  }
}
