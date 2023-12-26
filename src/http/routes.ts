import { FastifyInstance } from 'fastify'
import { registerProduct } from './controllers/register-product'
import { fetchProducts } from './controllers/fetch-products'

export async function appRoutes(app: FastifyInstance) {
  app.post('/product', registerProduct)
  app.get('/products', fetchProducts)
}
