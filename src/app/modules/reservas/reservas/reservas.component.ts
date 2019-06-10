import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from '../../../services/books.service';
import { Reserva } from '../../../models/reserva';
import { ReservasService } from '../../../services/reservas.service';
import { Router } from '@angular/router';
import { fade } from '../../../animations/animations.barrel';

@Component({
  selector: 'reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
  animations: [fade]
})
export class ReservasComponent implements OnInit {

  public usuario:any;
  public books$:Observable<any[]>;
  public reservas$:Observable<any[]>;
  
  displayedColumns: string[] = ['numero', 'libro', 'expedicion', 'estimada', 'devolucion'];

  constructor(private bookService:BooksService, private reservaService:ReservasService, private router:Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("user"));
    this.books$ = this.bookService.getBooks();
    this.reservas$ = this.reservaService.getReservasUsuario(this.usuario.id);
  }

  devolverLibro(id, usuario){
    console.log("este es el id", id);
    this.reservaService.devolverLibro(id, usuario);
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(["/auth"]);
  }

}
