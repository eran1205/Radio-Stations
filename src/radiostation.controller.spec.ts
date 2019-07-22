import { Test, TestingModule } from '@nestjs/testing';
import { RadioStationController } from './radiostation.controller';
import { RadioStationService } from './radiostation.service';

describe('AppController', () => {
  let appController: RadioStationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RadioStationController],
      providers: [RadioStationService],
    }).compile();

    appController = app.get<RadioStationController>(RadioStationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
