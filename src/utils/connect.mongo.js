import mongoose from 'mongoose'

export const connectMongoDB = async (URL) => {
  try {
    await mongoose.connect(URL)
    console.log('conectado a mongodb')
  } catch (error) {
    console.log(`algo malo paso ose esto ${error}`)
  }
}
