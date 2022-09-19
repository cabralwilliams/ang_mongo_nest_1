import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Team, TeamDocument } from 'src/schemas/team.schema';
import { CreateTeamDto } from 'src/dto/create-team';

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().populate('members').exec();
  }

  async findById(_id: string): Promise<Team> {
    const team = this.teamModel.findById(_id).populate('members').exec();
    return team;
  }
}
