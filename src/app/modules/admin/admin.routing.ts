// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { EditorLibrosComponent } from './editor-libros/editor-libros.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: EditorLibrosComponent,
                pathMatch: 'full'
            }
        ]
    }
];