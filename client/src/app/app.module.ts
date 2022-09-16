import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PowerModule } from './power/power.module';
import { PowerDetailModule } from './power-detail/power-detail.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PowerModule,
    PowerDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
