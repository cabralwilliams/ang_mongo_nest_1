import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesService } from './heroes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<any> | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes$ = this.heroesService.getHeroes();
  }

  async createHero() {
    const name = (<HTMLInputElement>document.querySelector('#name')).value.trim();
    const secret_identity = (<HTMLInputElement>document.querySelector('#secret_identity')).value.trim();
    if(name !== '') {
      const response = await fetch(`${environment.apiUrl}/heroes`, {
        method: 'POST',
        body: JSON.stringify({ name, secret_identity }),
        headers: { 'Content-type': 'application/json' }
      });

      if(response.ok) {
        window.location.reload();
      } else {
        console.log(response.status, response.statusText);
      }
    }
  }
}
