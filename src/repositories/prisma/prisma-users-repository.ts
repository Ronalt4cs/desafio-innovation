import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { ProductsRepository } from '../products-repository'

export class PrismaProductsRepository implements ProductsRepository {
  async getById(id: string) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      }
    })

    return product
  }

  async create(data: Prisma.ProductUncheckedCreateInput) {
    const product = await prisma.product.create({
      data,
    })

    return product
  }
}