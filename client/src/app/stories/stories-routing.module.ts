import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesHomeComponent } from './stories-home/stories-home.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
