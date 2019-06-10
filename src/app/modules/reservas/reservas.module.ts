import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {routes} from './reservas.routing';
import { ReservasComponent } from './reservas/reservas.component';
import { BookCardComponent } from './book-card/book-card.component';
import { CanReservar } from '../../guards/reserva.guard';


@NgModule({
    declarations: [
        ReservasComponent,
        BookCardComponent
    ],
    imports: [
      CommonModule, RouterModule.forChild(routes), SharedModule
    ],
    providers: [CanReservar]
  })
export default class AdminModule {
}
