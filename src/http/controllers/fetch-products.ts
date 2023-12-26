import { FastifyReply, FastifyRequest } from 'fastify'
import { fetchProductsQueryRequest } from '../helpers/products-schemas'
import { MakeFetchProductsService } from '@/services/factories/make-fetch-products-service'

export async function fetchProducts(request: FastifyRequest, reply: FastifyReply) {
  const { itemsPerPage, page } = fetchProductsQueryRequest.parse(request.query)

  const makeFecthProductsService = MakeFetchProductsService()
  const { products, pagination } = await makeFecthProductsService.execute({ page, itemsPerPage })

  return reply.status(200).send({
    products,
    pagination
  })
}