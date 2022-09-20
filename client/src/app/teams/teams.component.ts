import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  async createTeam() {
    const name = (<HTMLInputElement>document.querySelector('#name')).value.trim();
    let goodTeam = (<HTMLInputElement>document.querySelector('input[name="isGood"]')).value;
    const isGood = goodTeam === 'evil' ? false : true;
    if(name) {
      const response = await fetch(`${environment.apiUrl}/teams`, {
        method: 'POST',
        body: JSON.stringify({ name, isGood }),
        headers: { "Content-type": "application/json" }
      });
      if(response.ok) {
        window.location.reload();
      } else {
        console.log(response.status,response.statusText);
      }
    }
  }
}
