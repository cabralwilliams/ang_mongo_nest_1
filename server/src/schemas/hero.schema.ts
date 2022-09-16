import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Power } from './power.schema';
import { Team } from './team.schema';

export type HeroDocument = Hero & mongoose.Document;

@Schema()
export class Hero {
  @Prop({ required: true })
  name: string;

  @Prop({ require: true, default: 'none/unknown' })
  secret_identity: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: 'Power' })
  powers: Power[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: 'Team' })
  organizations: Team[];
}

export const HeroSchema = SchemaFactory.createForClass(Hero);