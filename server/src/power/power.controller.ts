import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PowerService } from './power.service';
import { CreatePowerDto } from 'src/dto/create-power';

@Controller('power')
export class PowerController {
  constructor(private powerService: PowerService) {}
  @Get()
  getPowers() {
    console.log('Getting all powers.');
    return this.powerService.findAll();
  }

  @Post()
  createPower(@Body() createPowerDto: CreatePowerDto) {
    return this.powerService.create(createPowerDto);
  }

  @Get(':_id')
  getPowerById(@Param('_id') _id: string) {
    console.log('Attempting to get a single power.');
    return this.powerService.findById(_id);
  }
}
