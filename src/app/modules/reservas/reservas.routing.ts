// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { CanReservar } from '../../guards/reserva.guard';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ReservasComponent,
                pathMatch: 'full',
                canActivate: [CanReservar]
            }
        ]
    }
];
  