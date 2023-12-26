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

export const productParamsSchema = z.object({
  id: z.string()
})

export const updateProductBodySchema = z.object({
  name: z.string().optional(),
  category: z.string(),
  status: z.enum(['active', 'inactive']).optional(),
  quantity: z.number().optional(),
})