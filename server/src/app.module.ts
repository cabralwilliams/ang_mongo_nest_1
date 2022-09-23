import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PowerModule } from './power/power.module';
import { ApiModule } from './api/api.module';
import { HeroModule } from './hero/hero.module';
import { StoryModule } from './story/story.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest_heroes'),
    PowerModule,
    ApiModule,
    HeroModule,
    StoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
