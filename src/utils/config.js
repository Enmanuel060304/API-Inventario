import dotenv from 'dotenv'

dotenv.config()

const { PORT, SALT_ROUNDS, MONGO_URL, JWT_SECRET, JWT_EXPIRES_IN } = process.env

export {
  PORT,
  SALT_ROUNDS,
  MONGO_URL,
  JWT_SECRET,
  JWT_EXPIRES_IN
}
