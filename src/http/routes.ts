import { FastifyInstance } from 'fastify'
import { registerProduct } from './controllers/register-product'
import { fetchProducts } from './controllers/fetch-products'
import { UpdateProduct } from './controllers/update-product'

export async function appRoutes(app: FastifyInstance) {
  app.post('/product', registerProduct)
  app.get('/products', fetchProducts)
  app.patch('/products', UpdateProduct)
}
