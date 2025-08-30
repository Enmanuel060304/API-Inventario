import { registerSchema } from '../zodSchemas/auth.schema.js'

export const registerBodyValidate = (req, res, next) => {
  const result = registerSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).send(result.error.issues)
  }
  next()
}
