import { FetchProductsServiceResponse } from '@/services/fetch-products'
import { Prisma, Product } from '@prisma/client'

export interface ProductsRepository {
  create(data: Prisma.ProductUncheckedCreateInput): Promise<Product>
  fetchProducts(page: number, itemsPerPage: number): Promise<FetchProductsServiceResponse>
  update(id: string, data: Prisma.ProductUncheckedUpdateInput): Promise<Product | null>
}
