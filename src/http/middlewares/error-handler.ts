import { env } from "@/env"
import { CountyAlreadyExistsError } from "@/services/errors/county-already-exists-error"
import { ResourceNotFoundError } from "@/services/errors/resource-not-found"
import { FastifyReply, FastifyRequest } from "fastify"
import { ZodError } from "zod"

export function errorHandler(error: Error, _: FastifyRequest, reply: FastifyReply) {
  if (error instanceof ZodError) {
    return reply.status(400).send({ message: 'Erro de validação', issues: error.format() })
  }

  if (error instanceof ResourceNotFoundError) {
    return reply.status(404).send({ message: error.message })
  }

  if (error instanceof CountyAlreadyExistsError) {
    return reply.status(409).send({ message: error.message })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // ToDo: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
}
