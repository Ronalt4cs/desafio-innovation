import { FastifyInstance } from 'fastify'
import { registerProduct } from './controllers/register-product'
import { fetchProducts } from './controllers/fetch-products'
import { updateProduct } from './controllers/update-product'
import { deleteProduct } from './controllers/delete-product'
import { registerCounty } from './controllers/register-county'

export async function appRoutes(app: FastifyInstance) {
  app.post('/products', registerProduct)
  app.get('/products', fetchProducts)
  app.patch('/products/:id', updateProduct)
  app.delete('/products/:id', deleteProduct)

  app.post('/counties', registerCounty)
}
