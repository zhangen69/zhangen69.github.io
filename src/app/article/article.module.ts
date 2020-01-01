import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RouterModule } from '@angular/router';
import { ArticleLatestComponent } from './article-latest/article-latest.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [ArticleListComponent, ArticleViewComponent, ArticleLatestComponent, ArticleFormComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RouterModule,
    SharedModule,
    CKEditorModule,
  ],
  exports: [
    ArticleLatestComponent
  ]
})
export class ArticleModule { }
