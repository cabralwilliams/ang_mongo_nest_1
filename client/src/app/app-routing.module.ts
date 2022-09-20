import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerComponent } from './power/power.component';
import { PowerDetailComponent } from './power-detail/power-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path: 'powers',
    component: PowerComponent
  },
  {
    path: 'powers/:_id',
    component: PowerDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'heroes/:_id',
    component: HeroDetailComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
