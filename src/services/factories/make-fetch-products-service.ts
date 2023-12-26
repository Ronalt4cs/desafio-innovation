import { PrismaProductsRepository } from '@/repositories/prisma/prisma-users-repository'
import { FetchProductsService } from '../fetch-products'

export function MakeFetchProductsService() {
  const productsRepository = new PrismaProductsRepository()
  const makeFecthProductsService = new FetchProductsService(productsRepository)

  return makeFecthProductsService
}