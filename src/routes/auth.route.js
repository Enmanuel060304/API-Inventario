
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints de autenticación
 */

import { Router } from 'express'
import { loginBodyValidate } from '../middlewares/loginBodyValidate.js'
import { registerBodyValidate } from '../middlewares/registerBodyValidate.js'

export const createRouter = ({ UserController }) => {
  const userRouter = Router()


  /**
   * @swagger
   * /auth/register:
   *   post:
   *     summary: Registrar un nuevo usuario
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       201:
   *         description: Usuario registrado correctamente
   *       400:
   *         description: Datos inválidos
   */
  userRouter.post('/register', registerBodyValidate, UserController.registerUser)

  /**
   * @swagger
   * /auth/login:
   *   post:
   *     summary: Iniciar sesión
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: Sesión iniciada correctamente
   *       400:
   *         description: Datos inválidos
   *       401:
   *         description: Credenciales incorrectas
   */
  userRouter.post('/login', loginBodyValidate, UserController.loginUser)

  /**
   * @swagger
   * /auth/logout:
   *   post:
   *     summary: Cerrar sesión
   *     tags: [Auth]
   *     responses:
   *       200:
   *         description: Sesión cerrada correctamente
   */
  userRouter.post('/logout', UserController.logoutUser)

  return userRouter
}
