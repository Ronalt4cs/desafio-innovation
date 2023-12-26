import { PrismaProductsRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterProductService } from '../register-product'

export function MakeRegisterProductsService() {
  const productsRepository = new PrismaProductsRepository()
  const makeRegisterProductService = new RegisterProductService(productsRepository)

  return makeRegisterProductService
}