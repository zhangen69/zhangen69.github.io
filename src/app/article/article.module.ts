import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';



@NgModule({
  declarations: [ArticleListComponent, ArticleViewComponent],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
