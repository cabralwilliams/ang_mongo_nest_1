import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Hero, HeroDocument } from 'src/schemas/hero.schema';
import { CreateHeroDto } from 'src/dto/create-hero';

@Injectable()
export class HeroService {
  constructor(@InjectModel(Hero.name) private heroModel: Model<HeroDocument>) {}

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
    const createdHero = new this.heroModel(createHeroDto);
    return createdHero.save();
  }

  async findAll(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }

  async findById(_id: string): Promise<Hero[]> {
    const hero = await this.heroModel.findById(_id).exec();
    return [hero];
  }
}
