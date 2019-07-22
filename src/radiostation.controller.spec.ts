import { Test, TestingModule } from '@nestjs/testing';
import { RadioStationController } from './radiostation.controller';
import { RadioStationService } from './radiostation.service';
import { RadioStationSchema } from './radiostation.schema';
import { MongooseModule } from '@nestjs/mongoose';

describe('AppController', () => {
  let appController: RadioStationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://user:user@127.0.0.1:32774/radio-stations', { useNewUrlParser: true }),
        MongooseModule.forFeature([{ name: 'RadioStation', schema: RadioStationSchema }]),
      ],
      controllers: [RadioStationController],
      providers: [RadioStationService],
    }).compile();

    appController = app.get<RadioStationController>(RadioStationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
        expect(true).toBe(true);
    });
  });
});
