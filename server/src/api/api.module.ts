import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { HeroService } from './hero/hero.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hero, HeroSchema } from 'src/schemas/hero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }]),
  ],
  controllers: [ApiController],
  providers: [ApiService, HeroService],
})
export class ApiModule {}
