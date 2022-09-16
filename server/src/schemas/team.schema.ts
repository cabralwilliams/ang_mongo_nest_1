import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Hero } from './hero.schema';

export type TeamDocument = Team & mongoose.Document;

@Schema()
export class Team {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: true })
  isGood: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: 'Hero' })
  members: Hero[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);