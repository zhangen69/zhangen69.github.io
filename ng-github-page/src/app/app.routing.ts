import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
//   providers: [AuthGuard]
})
export class AppRoutingModule { }
