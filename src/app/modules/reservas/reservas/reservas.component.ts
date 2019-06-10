import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from '../../../services/books.service';
import { Reserva } from '../../../models/reserva';
import { ReservasService } from '../../../services/reservas.service';

@Component({
  selector: 'reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  usuario = {
    username: "ZAC",
    fullname: "Andrés Zuleta",
    id: 1
  }
  public books$:Observable<any[]>;
  public reservas$:Observable<any[]>;
  
  displayedColumns: string[] = ['numero', 'libro', 'expedicion', 'estimada', 'devolucion'];

  constructor(private bookService:BooksService, private reservaService:ReservasService) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
    this.reservas$ = this.reservaService.getReservasUsuario(this.usuario.id);
  }

  devolverLibro(id, usuario){
    console.log("este es el id", id);
    this.reservaService.devolverLibro(id, usuario);
  }

}
