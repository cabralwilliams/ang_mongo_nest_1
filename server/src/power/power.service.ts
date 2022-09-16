import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Power, PowerDocument } from 'src/schemas/power.schema';
import { CreatePowerDto } from 'src/dto/create-power';

@Injectable()
export class PowerService {
  constructor(
    @InjectModel(Power.name) private powerModel: Model<PowerDocument>,
  ) {}

  async create(createPowerDto: CreatePowerDto): Promise<Power> {
    const createdPower = new this.powerModel(createPowerDto);
    return createdPower.save();
  }

  async findAll(): Promise<Power[]> {
    return this.powerModel.find().exec();
  }

  async findById(_id: string): Promise<Power[]> {
    const power = await this.powerModel.findOne({ _id: _id }).exec();
    console.log('Individual', power);
    return [power];
  }
}
