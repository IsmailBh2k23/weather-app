import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./apixu.service";

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
