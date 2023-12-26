import { FastifyReply, FastifyRequest } from 'fastify'
import { registerProductBodySchema } from '../helpers/products-schemas'
import { MakeRegisterProductsService } from '@/services/factories/make-register-products-service'

export async function registerProduct(request: FastifyRequest, reply: FastifyReply) {
  const { name, category, quantity, status } = registerProductBodySchema.parse(request.body)

  const RegisterProductService = MakeRegisterProductsService()
  const { product } = await RegisterProductService.execute({
    name,
    category,
    quantity,
    status
  })

  return reply.status(201).send(product)
}
