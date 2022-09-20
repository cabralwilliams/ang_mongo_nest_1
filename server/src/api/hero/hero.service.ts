import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Hero, HeroDocument } from 'src/schemas/hero.schema';
import { CreateHeroDto } from 'src/dto/create-hero';
import { Team, TeamDocument } from 'src/schemas/team.schema';

@Injectable()
export class HeroService {
  constructor(
    @InjectModel(Hero.name) private heroModel: Model<HeroDocument>,
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>,
  ) {}

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
    const hero = await this.heroModel
      .findById(_id)
      .populate('powers')
      .populate('organizations')
      .exec();
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

  async adjustHeroTeams(
    _id: string,
    organizationIds: string[],
  ): Promise<Hero[]> {
    console.log('organizationIds', organizationIds);
    await this.heroModel
      .findByIdAndUpdate(_id, { $set: { organizations: [] } })
      .exec();

    const hero = await this.heroModel
      .findByIdAndUpdate(
        _id,
        {
          $addToSet: { organizations: [...organizationIds] },
        },
        { new: true },
      )
      .populate('powers')
      .populate('organizations')
      .exec();

    for (let i = 0; i < organizationIds.length; i++) {
      await this.teamModel
        .findByIdAndUpdate(organizationIds[i], {
          $addToSet: { members: _id },
        })
        .exec();
    }
    return [hero];
  }
}
