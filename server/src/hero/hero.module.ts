import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { HeroService } from 'src/api/hero/hero.service';
import { Hero, HeroSchema } from 'src/schemas/hero.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Power, PowerSchema } from 'src/schemas/power.schema';
import { Team, TeamSchema } from 'src/schemas/team.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Hero.name, schema: HeroSchema },
      { name: Power.name, schema: PowerSchema },
      { name: Team.name, schema: TeamSchema },
    ]),
  ],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
