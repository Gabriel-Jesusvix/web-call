import { z } from 'zod'

export const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Usuário precisa ter no minĩmo 3 letras' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens',
    })
    .transform((username) => username.toLowerCase()),
})

export type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>
