import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PowerDocument = Power & Document;

@Schema()
export class Power {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop()
  description: string;
}

export const PowerSchema = SchemaFactory.createForClass(Power);