import { z } from 'zod';

export const salesSchema = z.object({
  clienteId: z.string().uuid(),
  total: z.number().nonnegative().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
})