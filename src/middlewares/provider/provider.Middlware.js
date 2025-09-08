import { ProviderSchema } from "../../zodSchemas/provider/ProviderSchema.js";

const validateBodyProvider = (req, res, next) => {
  const result = ProviderSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: 'Error de validación',
      issues: result.error.issues
    });
  }
  next();
};

export default validateBodyProvider;