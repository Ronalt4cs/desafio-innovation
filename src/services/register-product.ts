import { ProductsRepository } from '@/repositories/products-repository'
import { Product, Status } from '@prisma/client'

interface RegisterProductServiceRequest {
  name: string
  category: string
  status: Status
  quantity: number
}

interface RegisterProductServiceResponse {
  product: Product
}

export class RegisterProductService {
  constructor(private productsRepository: ProductsRepository) { }

  async execute({
    name,
    category,
    quantity,
    status
  }: RegisterProductServiceRequest): Promise<RegisterProductServiceResponse> {

    const product = await this.productsRepository.create({
      name,
      category,
      quantity,
      status
    })

    return { product }
  }
}