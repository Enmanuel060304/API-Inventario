import { z } from 'zod'

export const ProviderSchema = z.object({
  id: z.string().uuid({ message: 'El id debe ser un UUID válido.' }).optional(),
  fullName: z.string()
    .min(2, { message: 'El nombre completo debe tener al menos 2 caracteres.' })
    .max(50, { message: 'El nombre completo no debe exceder 50 caracteres.' })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: 'El nombre completo solo puede contener letras y espacios.' }),
  phoneNumber: z.string()
    .min(10, { message: 'El número de teléfono debe tener al menos 10 dígitos.' })
    .max(15, { message: 'El número de teléfono no debe exceder 15 dígitos.' })
    .regex(/^\+?\d{10,15}$/, { message: 'El número de teléfono debe ser válido y solo contener dígitos, puede iniciar con +.' }),
  email: z.string().email({ message: 'El correo electrónico debe ser válido.' }),
  direccion: z.string()
    .min(5, { message: 'La dirección debe tener al menos 5 caracteres.' })
    .max(200, { message: 'La dirección no debe exceder 200 caracteres.' }),
});
