import ClienteSchema from "../../zodSchemas/client/client.schema.js";

export const validateClientBody = (req, res, next) => {
  const { error } = ClienteSchema.safeParse(req.body);
  if (error) {
    return res.status(400).json({ error: error.errors });
  }
  next();
};