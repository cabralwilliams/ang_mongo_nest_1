import { Module } from '@nestjs/common';
import { PowerController } from './power.controller';
import { PowerService } from './power.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Power, PowerSchema } from 'src/schemas/power.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Power.name, schema: PowerSchema }]),
  ],
  controllers: [PowerController],
  providers: [PowerService],
})
export class PowerModule {}
