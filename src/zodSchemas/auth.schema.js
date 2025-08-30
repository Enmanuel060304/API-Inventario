import { z } from 'zod'

export const registerSchema = z.object({
  username: z.string().min(5).max(15).nonempty('Campo username requerido'),
  name: z.string().min(2).max(15).nonempty('Campo name requerido'),
  password: z.string().min(8).max(64).nonempty('Campo password requerido')
})

export const loginSchema = z.object({
  username: z.string({
    required_error: 'Campo requerido',
    invalid_type_error: 'El campo debe ser un texto',
    invalid_input: 'El campo no es válido'
  }).nonempty('Campo username requerido'),
  password: z.string({
    required_error: 'Campo requerido',
    invalid_type_error: 'El campo debe ser un texto'
  }).nonempty('Campo password requerido')
})
