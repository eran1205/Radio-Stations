import { Injectable } from '@nestjs/common';
import { RadioStation } from './radiostation.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRadioStationDTO } from './create-radiostation.dto';
import { RadioStationModule } from './radiostation.module';

@Injectable()
export class RadioStationService {
  constructor(@InjectModel('RadioStation') private readonly radioStationModel: Model<RadioStation>) { }

  async getAllRadioStations(): Promise<RadioStation[]> {
    const radioStations: RadioStation[] = await this.radioStationModel.find().exec();
    return radioStations;
  }

  // get single radio station
  async getRadioStation(radiostation: string): Promise<RadioStation> {
    const radioStation: RadioStation = await this.radioStationModel.findById(radiostation).exec();
    return radioStation;
  }

   // post a single radio station
  async addRadioStation(createRadioStationDTO: CreateRadioStationDTO): Promise<RadioStation> {
    const newRadioStation = await new this.radioStationModel(createRadioStationDTO);
    return newRadioStation.save();
  }

  async updateRadioStation(radioStationID, createCustomerDTO: CreateRadioStationDTO): Promise<RadioStation> {
    const updatedRadioStation = await this.radioStationModel
        .findByIdAndUpdate(radioStationID, createCustomerDTO, { new: true });
    return updatedRadioStation;
  }

  async deleteRadioStation(radioStationID: string): Promise<any> {
    const deletedCustomer = await this.radioStationModel.findByIdAndRemove(radioStationID);
    return deletedCustomer;
  }
}
