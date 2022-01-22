import { Test, TestingModule } from '@nestjs/testing';
import { BootcampkalinService } from './bootcampkalin.service';

describe('BootcampkalinService', () => {
  let service: BootcampkalinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BootcampkalinService],
    }).compile();

    service = module.get<BootcampkalinService>(BootcampkalinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
