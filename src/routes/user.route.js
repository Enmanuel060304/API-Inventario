import { Router } from 'express'

export const createRouter = ({ UserController }) => {
  const userRouter = Router()

  userRouter.post('/register', UserController.registerUser)
  userRouter.post('/login', UserController.loginUser)

  return userRouter
}
