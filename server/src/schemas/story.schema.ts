import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Team } from './team.schema';
import { Hero } from './hero.schema';

export type StoryDocument = Story & mongoose.Document;

@Schema()
export class Story {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop()
  text: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: 'Hero' })
  story_cast: Hero[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: 'Team' })
  belligerents: Team[];
}

export const StorySchema = SchemaFactory.createForClass(Story);
