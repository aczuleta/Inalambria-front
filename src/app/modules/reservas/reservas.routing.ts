// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ReservasComponent,
                pathMatch: 'full'
            }
        ]
    }
];
  