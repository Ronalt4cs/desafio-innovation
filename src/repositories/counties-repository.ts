import { County, Prisma } from '@prisma/client'

export interface CountiesRepository {
  create(data: Prisma.CountyUncheckedCreateInput): Promise<County>
  getById(id: number): Promise<County | null>
}