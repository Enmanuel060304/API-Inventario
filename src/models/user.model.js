import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  passwordHash: {
    type: String,
    require: true
  }
}, { collection: 'user' })

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject.__v
    delete returnedObject._id
  }
})

export const UserModel = mongoose.model('User', userSchema)
