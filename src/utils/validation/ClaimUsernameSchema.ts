import { z } from "zod";

export type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export const ClaimUsernameFormSchema = z.object({
  username: z.string()
  .min(3, {message: 'Usuário precisa ter no minĩmo 3 letras'})
  .regex(/^([a-z\\\\-]+)$/i, {message: 'O usuário pode ter apenas letras e hifens'})
  .transform(username => username.toLowerCase())
})
