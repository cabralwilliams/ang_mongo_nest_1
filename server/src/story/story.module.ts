import { Module } from '@nestjs/common';
import { StoryController } from './story.controller';
import { StoryService } from 'src/api/story/story.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hero, HeroSchema } from 'src/schemas/hero.schema';
import { Team, TeamSchema } from 'src/schemas/team.schema';
import { Story, StorySchema } from 'src/schemas/story.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Hero.name, schema: HeroSchema },
      { name: Team.name, schema: TeamSchema },
      { name: Story.name, schema: StorySchema },
    ]),
  ],
  controllers: [StoryController],
  providers: [StoryService],
})
export class StoryModule {}
