import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesService } from './heroes.service';

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

}
