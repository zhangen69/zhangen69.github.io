import { ArticleModule } from './../article/article.module';
import { AboutModule } from './../about/about.module';
import { LandingModule } from './../landing/landing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    LandingModule,
    AboutModule,
    ArticleModule,
    NzAnchorModule,
  ]
})
export class HomeModule { }
