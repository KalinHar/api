import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BootcampkalinService } from './bootcampkalin.service';
import { CreateBootcampkalinDto } from './dto/create-bootcampkalin.dto';
import { UpdateBootcampkalinDto } from './dto/update-bootcampkalin.dto';

@Controller('bootcampkalin')
export class BootcampkalinController {
  constructor(private readonly bootcampkalinService: BootcampkalinService) {}

  @Post()
  create(@Body() createBootcampkalinDto: CreateBootcampkalinDto) {
    return this.bootcampkalinService.create(createBootcampkalinDto);
  }

  @Get()
  findAll() {
    return this.bootcampkalinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bootcampkalinService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBootcampkalinDto: UpdateBootcampkalinDto) {
    return this.bootcampkalinService.update(+id, updateBootcampkalinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bootcampkalinService.remove(+id);
  }
}
