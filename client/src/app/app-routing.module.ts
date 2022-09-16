import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerComponent } from './power/power.component';
import { PowerDetailComponent } from './power-detail/power-detail.component';

const routes: Routes = [
  {
    path: 'powers',
    component: PowerComponent
  },
  {
    path: 'power/:_id',
    component: PowerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
