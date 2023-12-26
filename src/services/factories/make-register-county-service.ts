import { PrismaCountiesRepository } from '@/repositories/prisma/prisma-counties-repository'
import { RegisterCountyService } from '../register-county'

export function MakeRegisterCountyService() {
  const countiesRepository = new PrismaCountiesRepository()
  const makeRegisterCountyService = new RegisterCountyService(countiesRepository)

  return makeRegisterCountyService
}