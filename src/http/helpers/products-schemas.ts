import { z } from 'zod'

export const registerProductBodySchema = z.object({
  name: z.string(),
  category: z.string(),
  status: z.enum(['active', 'inactive']),
  quantity: z.number()
})