import { FastifyReply, FastifyRequest } from 'fastify'
import { updateProductBodySchema, productParamsSchema } from '../helpers/products-schemas'
import { MakeUpdateProductService } from '@/services/factories/make-update-product-service'

export async function UpdateProduct(request: FastifyRequest, reply: FastifyReply) {
  const { id } = productParamsSchema.parse(request.params)
  const { name, category, quantity, status } = updateProductBodySchema.parse(request.body)

  const makeUpdateProductService = MakeUpdateProductService()
  const { product } = await makeUpdateProductService.execute({
    id,
    data: {
      name,
      status,
      category,
      quantity,
    }
  })

  return reply.status(200).send(product)
}