import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PowerModule } from './power/power.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest_heroes'),
    PowerModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
