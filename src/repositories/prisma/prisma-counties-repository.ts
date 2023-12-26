import { Prisma } from '@prisma/client';
import { CountiesRepository } from '../counties-repository'
import { prisma } from '@/lib/prisma';

export class PrismaCountiesRepository implements CountiesRepository {
  async create(data: Prisma.CountyUncheckedCreateInput) {
    const county = await prisma.county.create({
      data
    })

    return county
  }

  async getById(id: number) {
    const county = await prisma.county.findUnique({
      where: {
        id
      }
    })

    return county
  }
}