import { ArticleFormComponent } from './article/article-form/article-form.component';
import { ArticleViewComponent } from './article/article-view/article-view.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article',
    children: [
      { path: '', component: ArticleListComponent },
      { path: 'form', component: ArticleFormComponent },
      { path: ':id', component: ArticleViewComponent },
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', anchorScrolling: 'enabled' })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
