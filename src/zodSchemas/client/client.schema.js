import { z } from "zod";

const clientSchema = z.object({
  id: z.string().uuid().optional(),
  fullName: z.string().min(1).max(50),
  phoneNumber: z.string().min(10).max(50).optional(),
});

export default clientSchema;