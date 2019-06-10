// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AuthComponent,
                pathMatch: 'full'
            }
        ]
    }
];
  