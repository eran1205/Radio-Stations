import { Module } from '@nestjs/common';
import { RadioStationController } from './radiostation.controller';
import { RadioStationService } from './radiostation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RadioStationSchema } from './radiostation.schema';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://eran1205:dhbdh123@ds119988.mlab.com:19988/radio-stations', { useNewUrlParser: true }),
    MongooseModule.forRoot('mongodb://user:user@127.0.0.1:32774/radio-stations', { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'RadioStation', schema: RadioStationSchema }]),
  ],
  controllers: [RadioStationController],
  providers: [RadioStationService],
})
export class RadioStationModule {}
