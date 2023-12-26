import { Prisma, Product } from '@prisma/client'
import { ProductsRepository } from '../products-repository'
import { randomUUID } from 'node:crypto'

export class FakeProductsRepository implements ProductsRepository {
  public items: Product[] = []

  async create(data: Prisma.ProductUncheckedCreateInput) {
    const product = {
      id: randomUUID(),
      name: data.name,
      category: data.category,
      status: data.status,
      quantity: data.quantity,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    }

    this.items.push(product)

    return product
  }

  async fetchProducts(page: number, itemsPerPage: number) {
    const skip = (page - 1) * itemsPerPage
    const take = itemsPerPage
    const totalItems = this.items.length

    const products = this.items.slice(skip, take)

    return {
      products,
      pagination: {
        page,
        itemsPerPage,
        totalItems
      }
    }
  }
}
