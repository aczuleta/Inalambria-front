import { Component, OnInit, Input } from '@angular/core';
import { ReservasService } from '../../../services/reservas.service';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor(private reservaService:ReservasService) { }

  @Input()book:any;
  @Input() user:any;

  ngOnInit() {
  }

  reservar(book, user){
    console.log("este es el libro y usuario", +book,+user);
    this.reservaService.createReserva(+book, +user);
  }

}
