import { beforeEach, describe, expect, it, should } from 'vitest'
import { DeleteProductService } from './delete-product'
import { FakeProductsRepository } from '@/repositories/fakes/fake-users-repository'
import { ResourceNotFoundError } from './errors/resource-not-found'

let sut: DeleteProductService
let productsRepository: FakeProductsRepository

describe('Delete Products service', (() => {
  beforeEach(() => {
    productsRepository = new FakeProductsRepository()
    sut = new DeleteProductService(productsRepository)
  })

  it('Should be able to delete product', async () => {
    const { id } = await productsRepository.create({
      name: 'fake product',
      category: 'fake',
      quantity: 1,
      status: 'active',
    })

    const { productDeleted } = await sut.execute({ id })
    expect(productDeleted.id).toEqual(expect.any(String))
  })

  it('Should not be able to delete if not found product', async () => {
    expect(async () => {
      await sut.execute({ id: 'fakeID' })
    }).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
}))