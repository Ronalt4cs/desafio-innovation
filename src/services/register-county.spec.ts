import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterCountyService } from './register-county'
import { FakeCountiesRepository } from '@/repositories/fakes/fake-counties-repository'
import { GetCountyService } from './get-county'
import { CountyAlreadyExistsError } from './errors/county-already-exists-error'

let sut: RegisterCountyService
let countiesRepository: FakeCountiesRepository
let getCountyService: GetCountyService

describe('Register county service', () => {
  beforeEach(() => {
    countiesRepository = new FakeCountiesRepository()
    sut = new RegisterCountyService(countiesRepository)
    getCountyService = new GetCountyService()
  })

  it('Should be able to register a county', async () => {
    const { id, nome } = await getCountyService.execute({ name: 'Angra dos Reis' })
    const { county } = await sut.execute({
      id,
      name: nome
    })

    expect(county.name).toBe('Angra dos Reis')
  })

  it('Should not be able to register a county twice', async () => {
    const { id, nome } = await getCountyService.execute({ name: 'Angra dos Reis' })
    await sut.execute({
      id,
      name: nome
    })

    expect(async () => {
      await sut.execute({
        id,
        name: nome
      })
    }).rejects.toBeInstanceOf(CountyAlreadyExistsError)
  })
})