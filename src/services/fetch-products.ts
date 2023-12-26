import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'

interface FetchProductsServicesRequest {
  page?: number
  itemsPerPage?: number
}

export interface FetchProductsServiceResponse {
  products: Product[]
  pagination: {
    page: number
    itemsPerPage: number
    totalItems: number
  }
}

export class FetchProductsService {
  constructor(private productSRepository: ProductsRepository) { }

  async execute({
    page,
    itemsPerPage,
  }: FetchProductsServicesRequest): Promise<FetchProductsServiceResponse> {

    const validPage = page || 1
    const validItemsPerPage = itemsPerPage || 10

    const { products, pagination } = await this.productSRepository.fetchProducts(validPage, validItemsPerPage)

    return {
      products,
      pagination
    }
  }
}