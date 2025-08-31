import { z } from 'zod'

const productSchema = z.object({
  id: z.string().uuid(),
  nombre: z.string().min(2).max(100),
  descripcion: z.string().max(500).nullable(),
  precio: z.number().min(0),
  stock: z.number().min(0).int(),
  categoria_id: z.string().uuid()
})

const productInputSchema = productSchema.omit({ id: true })

export { productSchema, productInputSchema }
