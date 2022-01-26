import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Bootcamp } from '@prisma/client'
import { Public } from 'nest-keycloak-connect'
import { BootcampService } from './bootcamp.service'
import { CreateBootcampDto } from './dto/create-bootcamp.dto'
import { UpdateBootcampDto } from './dto/update-bootcamp.dto'

@Controller('bootcamp')
export class BootcampController {
  constructor(private readonly bootcampService: BootcampService) {}

  @Post()
  @Public()
  create(@Body() createBootcampDto: CreateBootcampDto) {
    return this.bootcampService.create(createBootcampDto)
  }

  @Get('/all')
  @Public()
  findAll() {
    return this.bootcampService.findAll()
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string): Promise<Bootcamp | void> {
    return this.bootcampService.findOne(id)
  }

  @Patch(':id')
  @Public()
  update(@Param('id') id: string, @Body() updateBootcampDto: UpdateBootcampDto): Promise<Bootcamp | void> {
    return this.bootcampService.update(id, updateBootcampDto)
  }

  @Delete(':id')
  @Public()
  remove(@Param('id') id: string): Promise<Bootcamp | void> {
    return this.bootcampService.remove(id)
  }
}
