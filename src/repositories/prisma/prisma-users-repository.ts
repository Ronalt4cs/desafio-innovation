import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { ProductsRepository } from '../products-repository'
import { FetchProductsServiceResponse } from '@/services/fetch-products'

export class PrismaProductsRepository implements ProductsRepository {
  async create(data: Prisma.ProductUncheckedCreateInput) {
    const product = await prisma.product.create({
      data,
    })

    return product
  }

  async fetchProducts(page: number, itemsPerPage: number) {
    const skip = (page - 1) * itemsPerPage
    const take = itemsPerPage

    const productsInfos = await prisma.$transaction([
      prisma.product.count(),

      prisma.product.findMany({
        take,
        skip
      })
    ])

    const products = productsInfos[1]
    const pagination = {
      page,
      itemsPerPage,
      totalItems: productsInfos[0]
    }

    return {
      products,
      pagination
    }
  }
}
