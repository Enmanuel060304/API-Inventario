import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'

export const createRouter = ({ UserController }) => {
  const userRouter = Router()

  userRouter.post('/register', UserController.registerUser)
  userRouter.post('/login', UserController.loginUser)
  userRouter.post('/logout', UserController.logoutUser)
  userRouter.get('/hola', authMiddleware, (req, res) => {
    res.send('ruta protegida')
  })

  return userRouter
}
