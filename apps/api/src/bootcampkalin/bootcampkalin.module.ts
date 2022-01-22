import { Module } from '@nestjs/common';
import { BootcampkalinService } from './bootcampkalin.service';
import { BootcampkalinController } from './bootcampkalin.controller';

@Module({
  controllers: [BootcampkalinController],
  providers: [BootcampkalinService]
})
export class BootcampkalinModule {}
