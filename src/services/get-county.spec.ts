import { beforeEach, describe, expect, it } from 'vitest'
import { GetCountyService } from './get-county'
import { ResourceNotFoundError } from './errors/resource-not-found'

let sut: GetCountyService

describe('Get county service', () => {
  beforeEach(() => {
    sut = new GetCountyService()
  })

  it('Should be able to get RJ counties', async () => {
    const county = await sut.execute({ name: 'Angra dos Reis' })
    expect(county?.nome).toBe('Angra dos Reis')
  })

  it('Should not be able to get RJ counties with incomplete name', async () => {
    expect(async () => {
      await sut.execute({ name: 'Angra' })
    }).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})