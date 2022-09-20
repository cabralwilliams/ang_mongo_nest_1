import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams$: Observable<any> | undefined;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teams$ = this.teamsService.getTeams();
  }

}
