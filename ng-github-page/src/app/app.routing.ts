import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoListComponent } from './repo/repo-list/repo-list.component';
// import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path: 'repos',
    // canActivate: [AuthGuard],
    component: RepoListComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
//   providers: [AuthGuard]
})
export class AppRoutingModule { }
