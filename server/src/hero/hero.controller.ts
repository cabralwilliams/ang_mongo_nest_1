import { Controller, Get, Param, Post, Body, Redirect } from '@nestjs/common';
import { HeroService } from 'src/api/hero/hero.service';
import { CreateHeroDto } from 'src/dto/create-hero';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @Get()
  getHeroes() {
    return this.heroService.findAll();
  }

  @Post()
  @Redirect('http://localhost:3000/hero')
  async createHero(@Body() createHeroDto: CreateHeroDto) {
    const newHero = await this.heroService.create(createHeroDto);
    console.log(newHero);
  }
}
