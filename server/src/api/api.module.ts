import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { HeroService } from './hero/hero.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hero, HeroSchema } from 'src/schemas/hero.schema';
import { Power, PowerSchema } from 'src/schemas/power.schema';
import { TeamService } from './team/team.service';
import { Team, TeamSchema } from 'src/schemas/team.schema';
import { PowerService } from 'src/power/power.service';
import { StoryService } from './story/story.service';
import { Story, StorySchema } from 'src/schemas/story.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Hero.name, schema: HeroSchema },
      { name: Power.name, schema: PowerSchema },
      { name: Team.name, schema: TeamSchema },
      { name: Story.name, schema: StorySchema },
    ]),
  ],
  controllers: [ApiController],
  providers: [ApiService, HeroService, TeamService, PowerService, StoryService],
})
export class ApiModule {}
