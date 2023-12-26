import { County, Prisma } from '@prisma/client'
import { CountiesRepository } from '../counties-repository'

export class FakeCountiesRepository implements CountiesRepository {
  public items: County[] = []

  async create(data: Prisma.CountyUncheckedCreateInput) {
    const county = {
      id: data.id,
      name: data.name,
    }

    this.items.push(county)

    return county
  }

  async getById(id: number) {
    const county = this.items.find(county => {
      return county.id === id
    })

    if (!county) {
      return null
    }

    return county
  }
}