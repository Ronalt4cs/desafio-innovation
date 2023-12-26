import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found'

interface DeleteProductServiceRequest {
  id: string
}

interface DeleteProductServiceResponse {
  productDeleted: Product
}

export class DeleteProductService {
  constructor(private productSRepository: ProductsRepository) { }

  async execute({
    id
  }: DeleteProductServiceRequest): Promise<DeleteProductServiceResponse> {

    const product = await this.productSRepository.delete(id)

    if (!product) {
      throw new ResourceNotFoundError()
    }

    return {
      productDeleted: product
    }
  }
}