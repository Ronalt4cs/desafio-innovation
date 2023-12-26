import { $Enums, Prisma, Product } from '@prisma/client'
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

  async update(id: string, data: Prisma.ProductUncheckedUpdateInput) {
    const productFound = this.items.find((product => {
      return product.id === id
    }))

    if (!productFound) {
      return null
    }

    const productUpdated = Object.assign(productFound, data)
    this.items.push(productUpdated)

    return productUpdated
  }
}
