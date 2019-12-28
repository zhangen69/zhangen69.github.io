import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NzIconModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NzIconModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
