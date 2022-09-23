import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerComponent } from './power/power.component';
import { PowerDetailComponent } from './power-detail/power-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesHomeComponent } from './stories/stories-home/stories-home.component';
// import { StoriesComponent } from './stories/stories.component';
// import { StoriesHomeComponent } from './stories/stories-home/stories-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
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
  },
  {
    path: 'stories',
    component: StoriesComponent,
    children: [
      {
        path: '',
        component: StoriesHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
