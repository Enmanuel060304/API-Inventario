import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'El username es obligatorio']
  },
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  passwordHash: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
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
