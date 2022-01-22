import { Test, TestingModule } from '@nestjs/testing';
import { BootcampkalinController } from './bootcampkalin.controller';
import { BootcampkalinService } from './bootcampkalin.service';

describe('BootcampkalinController', () => {
  let controller: BootcampkalinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BootcampkalinController],
      providers: [BootcampkalinService],
    }).compile();

    controller = module.get<BootcampkalinController>(BootcampkalinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
