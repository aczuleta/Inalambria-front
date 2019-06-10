import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Observable } from 'rxjs';
import { Book } from '../../../models/models.barrel';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { fade } from '../../../animations/animations.barrel';
import { CentralService } from '../../../services/central.service';

@Component({
  selector: 'editor-libros',
  templateUrl: './editor-libros.component.html',
  styleUrls: ['./editor-libros.component.scss'],
  animations: [fade]
})
export class EditorLibrosComponent implements OnInit {

  public loading:boolean;
  public usuario:any;
  public base64textString:String="";
  public createForm:FormGroup;
  public books$:Observable<any[]>;
  constructor(private bookService:BooksService, private fb: FormBuilder,
  private router:Router, private central:CentralService ) {

  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("user"));
    this.books$ = this.bookService.getBooks();
    this.loading = false;
    this.central.subject.subscribe( x => {
      this.loading = x;
    })
  }

  crearLibro(titulo, isbn, genero, autor, paginas, cantidad){
    if(!(titulo.value && isbn.value && cantidad.value
      && genero.value && autor.value && paginas.value)){
      alert("Por favor llenar todos los campos.");
      return;
    }

    this.loading = true;
    this.bookService.createBook(titulo.value, isbn.value, cantidad.value, 
      genero.value, autor.value, paginas.value, this.base64textString)
  }

  eliminarLibro(id:number){
    this.loading = true;
    if(confirm("¿Está seguro que desea eliminar este libro? (Sólo pueden eliminarse libros sin reservas)")) 
      this.bookService.deleteBook(id);
  }

  toggleLibro(book){
    book.seleccionado = book.seleccionado ? !book.seleccionado : true;
  }

  actualizarLibro(book){
    this.loading = true;
    if(this.base64textString) book.cover = this.base64textString;
    this.bookService.updateBook(book.id, book.title, book.ISBN, 
    book.quantity, book.genre, book.author, book.pages, book.cover);
  }

  handleFileSelect(evt, book){
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
        var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
     let binaryString = readerEvt.target.result;
     this.base64textString= btoa(binaryString);
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(["/auth"]);
  }

}
