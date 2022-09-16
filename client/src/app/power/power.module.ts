import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerComponent } from './power.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PowerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PowerModule { }
