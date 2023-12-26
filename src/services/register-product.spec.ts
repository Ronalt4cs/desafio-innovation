import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterProductService } from './register-product'
import { FakeProductsRepository } from '@/repositories/fakes/fake-users-repository'

let sut: RegisterProductService
let productsRepository: FakeProductsRepository

describe('Register product Service', () => {
  beforeEach(() => {
    productsRepository = new FakeProductsRepository()
    sut = new RegisterProductService(productsRepository)
  })

  it('Should be able to register an product', async () => {
    const { product } = await sut.execute({
      name: 'fake product',
      category: 'fake',
      quantity: 3,
      status: 'active'
    })

    expect(product.id).toEqual(expect.any(String))
  })
})
