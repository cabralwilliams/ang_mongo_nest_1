import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { StoriesHomeComponent } from './stories-home/stories-home.component';


@NgModule({
  declarations: [
    StoriesComponent,
    StoriesHomeComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
