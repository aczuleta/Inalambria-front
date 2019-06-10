import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {routes} from './admin.routing';

import { EditorLibrosComponent } from './editor-libros/editor-libros.component';
import { CanAdmin } from '../../guards/admin.guard';

@NgModule({
    declarations: [
      EditorLibrosComponent
    ],
    imports: [
      CommonModule, RouterModule.forChild(routes), SharedModule
    ],
    providers: [CanAdmin]
  })
export default class AdminModule {
}
  