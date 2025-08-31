import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../utils/config.js'

export const authMiddleware = (req, res, next) => {
  // console.log(req.cookies)

  const token = req.cookies?.token
  if (!token) return res.status(401).json({ error: 'usuario no autenticado' })

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'token invalido o expirado' })
    }

    req.user = decoded
    next()
  })
}
