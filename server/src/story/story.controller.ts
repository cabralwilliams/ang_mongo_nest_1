import { Controller, Get, Param } from '@nestjs/common';
import { StoryService } from 'src/api/story/story.service';

@Controller('stories')
export class StoryController {
  constructor(private storyService: StoryService) {}

  @Get()
  getAllStories() {
    return this.storyService.findAll();
  }

  @Get(':_id')
  getStoryById(@Param('_id') _id: string) {
    return this.storyService.findStoryById(_id);
  }

  @Get('edit/:_id')
  getStoryByIdToEdit(@Param('_id') _id: string) {
    return this.storyService.findStoryById(_id);
  }
}
