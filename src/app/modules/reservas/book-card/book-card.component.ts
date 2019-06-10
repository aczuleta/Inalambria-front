import { Component, OnInit, Input } from '@angular/core';
import { ReservasService } from '../../../services/reservas.service';
import { fade } from '../../../animations/animations.barrel';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  animations: [fade]
})
export class BookCardComponent implements OnInit {

  constructor(private reservaService:ReservasService) { }

  @Input()book:any;
  @Input() user:any;

  ngOnInit() {
  }

  reservar(book, user){
    this.reservaService.createReserva(+book, +user);
  }

}
