import { beforeEach, describe, expect, it } from 'vitest'
import { UpdateProductService } from './update-product'
import { FakeProductsRepository } from '@/repositories/fakes/fake-users-repository'
import { ResourceNotFoundError } from './errors/resource-not-found'

let sut: UpdateProductService
let productsRepository: FakeProductsRepository

describe('Update product service', () => {
  beforeEach(() => {
    productsRepository = new FakeProductsRepository()
    sut = new UpdateProductService(productsRepository)
  })

  it('Should be able to update an product', async () => {
    const { id } = await productsRepository.create({
      name: 'fake product',
      category: 'fake',
      quantity: 1,
      status: 'active',
    })

    const { product } = await sut.execute({
      id,
      data: {
        name: 'product',
        quantity: 2
      }
    })

    expect(product.name).toEqual('product')
    expect(product.quantity).toEqual(2)
  })

  it('Should not be able to update an product if not found', async () => {
    expect(async () => {
      await sut.execute({
        id: 'fakeId',
        data: {
          name: 'product',
          quantity: 2
        }
      })
    }).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})