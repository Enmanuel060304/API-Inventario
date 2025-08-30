import { loginSchema } from '../zodSchemas/auth.schema.js'

export const loginBodyValidate = (req, res, next) => {
  const result = loginSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).send(result.error.issues)
  }
  next()
}
