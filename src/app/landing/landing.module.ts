import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    NzIconModule,
    HttpClientModule,
  ],
  exports: [
    LandingComponent,
  ]
})
export class LandingModule { }
