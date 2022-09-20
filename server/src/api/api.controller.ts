import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
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

  @Get('powers')
  getAllPowers() {
    return this.powerService.findAll();
  }

  @Get('powers/:_id')
  getPowerById(@Param('_id') _id: string) {
    return this.powerService.findById(_id);
  }

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
    console.log('Trying to get data about 1 hero');
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

  @Put('heroes/:heroId/organizations')
  updateHeroTeams(@Param('heroId') heroId: string, @Body() body: any) {
    console.log('Trying to update hero organizations');
    return this.heroService.adjustHeroTeams(heroId, body.organizationIds);
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
    let powers = await this.powerService.findAll();
    const converted = powers.map((p) => {
      const out = { ...p }['_doc'];
      out.checked = false;
      for (let i = 0; i < heroes[0].powers.length; i++) {
        if (out.name === heroes[0].powers[i].name) {
          out.checked = true;
          break;
        }
      }
      return out;
    });
    console.log('Converted');
    console.log(converted);
    // console.log(Object.keys(converted[0]));
    // console.log(converted[0]['_doc']);
    // console.log(powers);
    powers = powers.map((p) => {
      const out = {
        name: p.name,
        description: p.description,
        checked: false,
      };
      let powerFound = false;
      for (let i = 0; i < heroes[0].powers.length; i++) {
        if (heroes[0].powers[i].name === p.name) {
          powerFound = true;
          break;
        }
      }
      out.checked = powerFound;
      return out;
    });
    // console.log(powers);
    const organizations = await this.teamService.findAll();
    const transformed = organizations.map((o) => {
      const out = { ...o }['_doc'];
      out.checked = false;
      for (let i = 0; i < heroes[0].organizations.length; i++) {
        if (heroes[0].organizations[i].name === o.name) {
          out.checked = true;
          break;
        }
      }
      return out;
    });

    console.log(transformed);

    return [{ hero: heroes[0], powers: converted, organizations: transformed }];
  }

  @Post('powers')
  createPower(@Body() createPowerDto: CreatePowerDto) {
    return this.powerService.create(createPowerDto);
  }
}
