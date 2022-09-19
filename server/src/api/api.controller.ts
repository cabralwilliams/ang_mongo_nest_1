import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Redirect,
} from '@nestjs/common';
import { HeroService } from './hero/hero.service';
import { TeamService } from './team/team.service';
import { CreateHeroDto } from 'src/dto/create-hero';
import { CreateTeamDto } from 'src/dto/create-team';
import { CreatePowerDto } from 'src/dto/create-power';
import { PowerService } from 'src/power/power.service';

@Controller('api')
export class ApiController {
  constructor(
    private heroService: HeroService,
    private teamService: TeamService,
    private powerService: PowerService,
  ) {}

  @Get('heroes')
  getAllHeroes() {
    return this.heroService.findAll();
  }

  @Post('heroes')
  @Redirect('http://localhost:4200/heroes')
  createHero(@Body() createHeroDto: CreateHeroDto) {
    return this.heroService.create(createHeroDto);
  }

  @Get('heroes/:_id')
  getHeroById(@Param('_id') _id: string) {
    return this.heroService.findById(_id);
  }

  @Put('heroes/:heroId/powers')
  updateHeroPower(@Param('heroId') heroId: string, @Body() body: any) {
    console.log('Trying to update hero powers');
    return this.heroService.adjustHeroPowers(heroId, body.powerIds);
  }

  @Post('teams')
  createTeam(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get('teams')
  getAllTeams() {
    return this.teamService.findAll();
  }

  @Get('teams/:_id')
  getTeamById(@Param() _id: string) {
    return [this.teamService.findById(_id)];
  }

  @Get('hero/edit/:_id')
  async getHeroAndExistingPowersAndTeams(@Param() _id: string) {
    const heroes = await this.heroService.findById(_id);
    const powers = await this.powerService.findAll();
    const organizations = await this.teamService.findAll();
    return [{ hero: heroes[0], powers, organizations }];
  }

  @Post('powers')
  createPower(@Body() createPowerDto: CreatePowerDto) {
    return this.powerService.create(createPowerDto);
  }
}
