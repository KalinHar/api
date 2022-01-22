import { PartialType } from '@nestjs/swagger';
import { CreateBootcampkalinDto } from './create-bootcampkalin.dto';

export class UpdateBootcampkalinDto extends PartialType(CreateBootcampkalinDto) {}
