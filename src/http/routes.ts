import { FastifyInstance } from 'fastify'
import { registerProduct } from './controllers/register-product'
import { fetchProducts } from './controllers/fetch-products'
import { updateProduct } from './controllers/update-product'
import { deleteProduct } from './controllers/delete-product'

export async function appRoutes(app: FastifyInstance) {
  app.post('/products', registerProduct)
  app.get('/products', fetchProducts)
  app.patch('/products', updateProduct)
  app.delete('/products', deleteProduct)
}
