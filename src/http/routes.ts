import { FastifyInstance } from 'fastify'
import { registerProduct } from './controllers/register-product'

export async function appRoutes(app: FastifyInstance) {
  app.post('/product', registerProduct)
}
