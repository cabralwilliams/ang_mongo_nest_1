import { Injectable } from '@nestjs/common';
import { Story, StoryDocument } from 'src/schemas/story.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStoryDto } from 'src/dto/create-story';

@Injectable()
export class StoryService {
  constructor(
    @InjectModel(Story.name) private storyModel: Model<StoryDocument>,
  ) {}

  async findAll(): Promise<Story[]> {
    return await this.storyModel
      .find()
      .populate('story_cast')
      .populate('belligerents');
  }

  async create(createStoryDto: CreateStoryDto): Promise<Story> {
    const createdStory = await this.storyModel.create(createStoryDto);
    return createdStory.save();
  }

  async findStoryById(_id: string): Promise<Story[]> {
    const story = await this.storyModel
      .findById(_id)
      .populate('story_cast')
      .populate('belligerents')
      .exec();
    return [story];
  }
}
