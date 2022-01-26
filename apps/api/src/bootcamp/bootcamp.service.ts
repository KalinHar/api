import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { Bootcamp, Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from '../prisma/prisma.service'
import { CreateBootcampDto } from './dto/create-bootcamp.dto'
import { UpdateBootcampDto } from './dto/update-bootcamp.dto'

@Injectable()
export class BootcampService {
  constructor(private prisma: PrismaService) {}

  create(createBootcampDto: CreateBootcampDto) {
    return this.prisma.bootcamp.create({ data: createBootcampDto });
  }

  findAll() {
    return this.prisma.bootcamp.findMany()
  }

  async findOne(id: string): Promise<Bootcamp | void> {
    const result = await this.prisma.bootcamp.findFirst({where : {id: id}})
    if (result == null) {
      Logger.warn('No bootcamper with ID: ' + id)
      throw new NotFoundException('No bootcamper with ID: ' + id)
    }
    return result
  }

  async update(id: string, updateBootcampDto: UpdateBootcampDto): Promise<Bootcamp | void> {
    try {
      const result = await this.prisma.bootcamp.update( {
        where: { id: id},
        data: updateBootcampDto
      })
      return result
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        Logger.warn('No bootcamper record with ID' + id)
        throw new NotFoundException('No bootcamper record with ID' + id)
      }
    }
  }

  async remove(id: string): Promise<Bootcamp | void> {
    try {
      const result = await this.prisma.bootcamp.delete( { where: { id: id}})
      return result
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        Logger.warn('No bootcamper record with ID' + id)
        throw new NotFoundException('No bootcamper record with ID' + id)
      }
    }
  }
}
