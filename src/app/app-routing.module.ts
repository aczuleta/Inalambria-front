import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "auth",
    pathMatch: "full"
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module'
  },
  {
    path: 'reservas',
    loadChildren: './modules/reservas/reservas.module'
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
