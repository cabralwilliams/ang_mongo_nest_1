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
    return this.heroModel
      .find()
      .populate('powers')
      .populate('organizations')
      .exec();
  }

  async findById(_id: string): Promise<Hero[]> {
    const hero = await this.heroModel.findById(_id).populate('powers').exec();
    return [hero];
  }

  async adjustHeroPowers(_id: string, powerIds: string[]): Promise<Hero[]> {
    console.log('powerIds', powerIds);
    await this.heroModel
      .findByIdAndUpdate(_id, { $set: { powers: [] } })
      .exec();

    const hero = await this.heroModel
      .findByIdAndUpdate(
        _id,
        {
          $addToSet: { powers: [...powerIds] },
        },
        { new: true },
      )
      .populate('powers')
      .populate('organizations')
      .exec();
    return [hero];
  }
}
