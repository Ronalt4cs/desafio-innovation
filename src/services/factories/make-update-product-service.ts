import { PrismaProductsRepository } from '@/repositories/prisma/prisma-users-repository'
import { UpdateProductService } from '../update-product'

export function MakeUpdateProductService() {
  const productsRepository = new PrismaProductsRepository()
  const makeUpdateProductService = new UpdateProductService(productsRepository)

  return makeUpdateProductService
}