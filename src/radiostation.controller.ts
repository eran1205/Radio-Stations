import { Controller, Get, Post, Res, Body, HttpStatus, Param, NotFoundException, Put, Delete, Query, Logger } from '@nestjs/common';
import { RadioStationService } from './radiostation.service';
import { CreateRadioStationDTO } from './create-radiostation.dto';
import { async } from 'rxjs/internal/scheduler/async';
import { RadioStation } from './radiostation.interface';

@Controller('api/radiostations')
export class RadioStationController {
  constructor(private readonly radioStationService: RadioStationService) {}
  private logger = new Logger('RadioStationController', true);

  @Get()
  async getRadioStations() {
      this.logger.debug('Get a list of radio stations ');
      const radioStations: RadioStation[] = await this.radioStationService.getAllRadioStations();
      this.logger.debug(`Got ${radioStations.length} radio statioins`);
      return radioStations;
  }

  @Get('/:radioStationID')
  async getRadioStation(@Res() res, @Param('radioStationID') radioStationID) {
      this.logger.debug(`Get a radio station with id: ${radioStationID}`);
      const radioStation = await this.radioStationService.getRadioStation(radioStationID);
      if (!radioStation) {
        throw new NotFoundException('Radio Station does not exist!');
      }
      return res.status(HttpStatus.OK).json(radioStation);
  }

  @Post()
  async addCustomer(@Res() res, @Body() createCustomerDTO: CreateRadioStationDTO) {
      const radioStation = await this.radioStationService.addRadioStation(createCustomerDTO);
      return res.status(HttpStatus.OK).json({
          message: 'Radio Station has been created successfully', radioStation,
      });
  }

  @Put('/:radioStationID')
  async updateRadioStation(@Res() res, @Param('radioStationID') radioStationID, @Body() createRadioStationDTO: CreateRadioStationDTO) {
    const radioStation = await this.radioStationService.updateRadioStation(radioStationID, createRadioStationDTO);
    if (!radioStation) {
      throw new NotFoundException('Radio station does not exist!');
    }
    return res.status(HttpStatus.OK).json({
        message: 'Customer has been successfully updated', radioStation,
    });
  }

  @Delete('/:radioStationID')
    async deleteCustomer(@Res() res, @Param('radioStationID') radioStationID) {
        this.logger.debug(`Delete a radio station with id: ${radioStationID}`);
        const radioStation = await this.radioStationService.deleteRadioStation(radioStationID);
        if (!radioStation) {
          throw new NotFoundException('Radio Station does not exist');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Radio Station has been deleted', radioStation,
        });
    }
}
