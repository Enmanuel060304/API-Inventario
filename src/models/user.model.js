import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  passwordHash: String
}, { collection: 'user' })

export const UserModel = mongoose.model('User', userSchema)
