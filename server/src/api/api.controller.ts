import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HeroService } from './hero/hero.service';
import { CreateHeroDto } from 'src/dto/create-hero';

@Controller('api')
export class ApiController {
  constructor(private heroService: HeroService) {}

  @Get('heroes')
  getAllHeroes() {
    return this.heroService.findAll();
  }

  @Post('heroes')
  createHero(@Body() createHeroDto: CreateHeroDto) {
    return this.heroService.create(createHeroDto);
  }

  @Get('heroes/:_id')
  getHeroById(@Param('_id') _id: string) {
    return this.heroService.findById(_id);
  }
}
