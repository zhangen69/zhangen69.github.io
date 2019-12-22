import { AboutModule } from './../about/about.module';
import { LandingModule } from './../landing/landing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    LandingModule,
    AboutModule,
  ]
})
export class HomeModule { }
