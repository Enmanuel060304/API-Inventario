import ClienteSchema from "../../zodSchemas/client/client.schema.js";

export const validateClientBody = (req, res, next) => {
  const result = ClienteSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.issues });
  }
  next();
};