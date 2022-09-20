import { Controller, Get } from '@nestjs/common';
import { HeroService } from 'src/api/hero/hero.service';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @Get()
  getHeroes() {
    return this.heroService.findAll();
  }
}
