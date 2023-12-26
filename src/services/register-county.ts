import { CountiesRepository } from '@/repositories/counties-repository'
import { County } from '@prisma/client'
import { CountyAlreadyExistsError } from './errors/county-already-exists-error'

interface RegisterCountyServiceRequest {
  id: number,
  name: string
}

interface RegisterCountyServiceResponse {
  county: County
}

export class RegisterCountyService {
  constructor(private countiesRepository: CountiesRepository) { }

  async execute({
    id,
    name
  }: RegisterCountyServiceRequest): Promise<RegisterCountyServiceResponse> {

    const countyAlreadyExist = await this.countiesRepository.getById(id)

    if (countyAlreadyExist) {
      throw new CountyAlreadyExistsError()
    }

    const county = await this.countiesRepository.create({
      id,
      name
    })

    return {
      county
    }
  }
}