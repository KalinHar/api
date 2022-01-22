import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Public } from 'nest-keycloak-connect';
import { BootcampkalinService } from './bootcampkalin.service';
import { CreateBootcampkalinDto } from './dto/create-bootcampkalin.dto';
import { UpdateBootcampkalinDto } from './dto/update-bootcampkalin.dto';

@Controller('bootcampkalin')
export class BootcampkalinController {
  constructor(private readonly bootcampkalinService: BootcampkalinService) {}

  @Post()
  @Public()
  create(@Body() createBootcampkalinDto: CreateBootcampkalinDto) {
    return this.bootcampkalinService.create(createBootcampkalinDto);
  }

  @Get()
  @Public()
  findAll() {
    return this.bootcampkalinService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.bootcampkalinService.findOne(+id);
  }

  @Patch(':id')
  @Public()
  update(@Param('id') id: string, @Body() updateBootcampkalinDto: UpdateBootcampkalinDto) {
    return this.bootcampkalinService.update(+id, updateBootcampkalinDto);
  }

  @Delete(':id')
  @Public()
  remove(@Param('id') id: string) {
    return this.bootcampkalinService.remove(+id);
  }
}
