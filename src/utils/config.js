import dotenv from 'dotenv'

dotenv.config()

const { 
  PORT, 
  SALT_ROUNDS, 
  MONGO_URL, 
  JWT_SECRET, 
  JWT_EXPIRES_IN, 
  DB_NAME, 
  DB_PORT, 
  DB_USER, 
  DB_PASSWORD, 
  DB_HOST } = process.env

export {
  PORT,
  SALT_ROUNDS,
  MONGO_URL,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  DB_NAME,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST
}
