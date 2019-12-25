import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [ArticleListComponent, ArticleViewComponent],
  imports: [
    CommonModule,
    NzCardModule,
  ]
})
export class ArticleModule { }
