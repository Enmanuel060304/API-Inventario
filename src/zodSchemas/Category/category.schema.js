import { z } from 'zod'

const CreateSchema = z.object({
  nombre: z.string().min(1).max(100),
  descripcion: z.string().min(1).max(255)
})

export {
  CreateSchema
}