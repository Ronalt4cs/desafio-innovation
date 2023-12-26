import { FastifyReply, FastifyRequest } from 'fastify'
import { productParamsSchema } from '../helpers/products-schemas'
import { MakeDeleteProductService } from '@/services/factories/make-delete-product-service'

export async function deleteProduct(request: FastifyRequest, reply: FastifyReply) {
  const { id } = productParamsSchema.parse(request.params)

  const makeDeleteProductService = MakeDeleteProductService()
  await makeDeleteProductService.execute({ id })

  return reply.status(204).send()
}