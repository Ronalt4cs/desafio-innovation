import { MakeGetCountyService } from '@/services/factories/make-get-county-service'
import { MakeRegisterCountyService } from '@/services/factories/make-register-county-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

const getCountyRequest = z.object({
  name: z.string()
})

export async function registerCounty(request: FastifyRequest, reply: FastifyReply) {
  const { name } = getCountyRequest.parse(request.body)

  const makeGetCountyService = MakeGetCountyService()
  const { id, nome } = await makeGetCountyService.execute({ name })

  const makeRegisterCountyService = MakeRegisterCountyService()
  const { county } = await makeRegisterCountyService.execute({ id, name: nome })

  return reply.status(201).send(county)
}
