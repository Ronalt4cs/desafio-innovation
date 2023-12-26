import { z } from 'zod'

export const registerProductBodySchema = z.object({
  name: z.string(),
  category: z.string(),
  status: z.enum(['active', 'inactive']),
  quantity: z.number()
})

export const fetchProductsQueryRequest = z.object({
  page: z.coerce.number().positive().int().optional(),
  itemsPerPage: z.coerce.number().positive().int().optional()
})