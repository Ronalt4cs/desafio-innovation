import { beforeEach, describe, expect, it } from 'vitest'
import { FetchProductsService } from './fetch-products'
import { FakeProductsRepository } from '@/repositories/fakes/fake-users-repository'

let sut: FetchProductsService
let productsRepository: FakeProductsRepository

describe('Fetch products service', () => {
  beforeEach(() => {
    productsRepository = new FakeProductsRepository()
    sut = new FetchProductsService(productsRepository)
  })

  it('Should be able to fetch products', async () => {
    await productsRepository.create({
      name: 'fake product',
      category: 'fake',
      quantity: 1,
      status: 'active',
    })

    await productsRepository.create({
      name: 'fake product',
      category: 'fake',
      quantity: 1,
      status: 'active',
    })

    const { products, pagination } = await sut.execute({ page: 1, itemsPerPage: 1 })

    expect(products).toHaveLength(1)
    expect(pagination.totalItems).toEqual(2)
  })
})