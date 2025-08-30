import { Router } from 'express'
import { loginBodyValidate } from '../middlewares/loginBodyValidate.js'
import { registerBodyValidate } from '../middlewares/registerBodyValidate.js'

export const createRouter = ({ UserController }) => {
  const userRouter = Router()

  userRouter.post('/register', registerBodyValidate, UserController.registerUser)
  userRouter.post('/login', loginBodyValidate, UserController.loginUser)
  userRouter.post('/logout', UserController.logoutUser)

  return userRouter
}
