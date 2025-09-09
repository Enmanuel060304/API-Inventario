import { salesSchema } from "../../zodSchemas/sales/salesSchema.js";


export const validateSalesBody = (req, res, next) => {
  const result = salesSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.issues });
  }
  next();
}