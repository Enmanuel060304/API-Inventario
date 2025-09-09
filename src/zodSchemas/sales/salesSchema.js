import { z } from 'zod';

export const salesSchema = z.object({
  id: z.string().uuid().optional(),
  usuarioId: z.string().uuid(),
  clienteId: z.string().uuid(),
  total: z.number().positive(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
})