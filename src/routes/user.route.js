import { Router } from 'express';

const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.send('hola mundo desde express')
})

export {
  userRouter
}