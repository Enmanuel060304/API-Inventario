import { CreateSchema } from '../../zodSchemas/Category/category.schema.js'

const ValidateBody = (req, res, next) => {
  const result = CreateSchema.safeParse(req.body)

  if(!result.success){
    return res.status(400).json({
      message: "Validation error",
      errors: result.error.issues
    })
  }
    
  next()
} 

const ValidateUpdateBody = (req, res, next) => {
  const result = CreateSchema.safeParse(req.body)

  if(!result.success){
    return res.status(400).json({
      message: "Validation error",
      errors: result.error.issues
    })
  }

  next()
}

export { 
  ValidateBody,  
  ValidateUpdateBody
}