import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT ?? 3000
const SALT_ROUNDS = process.env.SALT_ROUNDS ?? 10
const MONGO_URL = process.env.MONGO_URL

export {
  PORT,
  SALT_ROUNDS,
  MONGO_URL
}
