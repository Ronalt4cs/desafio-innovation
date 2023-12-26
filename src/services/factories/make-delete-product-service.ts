import { PrismaProductsRepository } from '@/repositories/prisma/prisma-users-repository'
import { DeleteProductService } from '../delete-product'

export function MakeDeleteProductService() {
  const productsRepository = new PrismaProductsRepository()
  const makeDeleteProductService = new DeleteProductService(productsRepository)

  return makeDeleteProductService
}