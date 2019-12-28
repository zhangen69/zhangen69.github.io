import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticleListComponent, ArticleViewComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RouterModule,
    SharedModule,
  ]
})
export class ArticleModule { }
