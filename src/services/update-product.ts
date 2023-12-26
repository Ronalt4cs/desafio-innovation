import { ProductsRepository } from '@/repositories/products-repository'
import { Prisma, Product, Status } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found'

interface UpdateProductServiceRequest {
  id: string,
  data: Prisma.ProductUncheckedUpdateInput
}

interface UpdateProductServiceResponse {
  product: Product
}

export class UpdateProductService {
  constructor(private productsRepository: ProductsRepository) { }

  async execute({
    id,
    data
  }: UpdateProductServiceRequest): Promise<UpdateProductServiceResponse> {

    const product = await this.productsRepository.update(id, data)

    if (!product) {
      throw new ResourceNotFoundError()
    }
    return { product }
  }
}