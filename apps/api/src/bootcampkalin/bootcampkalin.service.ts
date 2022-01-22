import { Injectable } from '@nestjs/common';
import { CreateBootcampkalinDto } from './dto/create-bootcampkalin.dto';
import { UpdateBootcampkalinDto } from './dto/update-bootcampkalin.dto';

@Injectable()
export class BootcampkalinService {
  create(createBootcampkalinDto: CreateBootcampkalinDto) {
    return 'This action adds a new bootcampkalin';
  }

  findAll() {
    return `This action returns all bootcampkalin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bootcampkalin`;
  }

  update(id: number, updateBootcampkalinDto: UpdateBootcampkalinDto) {
    return `This action updates a #${id} bootcampkalin`;
  }

  remove(id: number) {
    return `This action removes a #${id} bootcampkalin`;
  }
}
