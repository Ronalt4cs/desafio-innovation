import { Prisma, Product } from '@prisma/client'
import { ProductsRepository } from '../products-repository'
import { randomUUID } from 'node:crypto'

export class FakeProductsRepository implements ProductsRepository {
  public items: Product[] = []

  async getById(userId: string) {
    const user = this.items.find((item) => item.id === userId)

    if (!user) {
      return null
    }

    return user
  }

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
}
