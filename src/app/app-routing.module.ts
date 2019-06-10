import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.default)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./modules/reservas/reservas.module').then(m => m.default)
  },
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.default)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
