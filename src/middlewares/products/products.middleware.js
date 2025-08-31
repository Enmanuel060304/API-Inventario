import { productInputSchema } from "../../zodSchemas/products/products.schema.js";

const validateProductInput = (req, res, next) => {
  const result = productInputSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.issues });
  }
  next();
};

export { validateProductInput };
