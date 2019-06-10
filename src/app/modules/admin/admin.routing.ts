// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { EditorLibrosComponent } from './editor-libros/editor-libros.component';
import { CanAdmin } from '../../guards/admin.guard';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: EditorLibrosComponent,
                pathMatch: 'full',
                canActivate: [CanAdmin]
            }
        ]
    }
];