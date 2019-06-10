// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Apollo } from 'apollo-angular';
import {Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {getBooks} from './queries/books';
import {createBook, deleteBook, updateBook} from './mutations/books'
import gql from 'graphql-tag';
import { Book } from '../models/models.barrel';
import { CentralService } from './central.service';


@Injectable({
    providedIn: 'root',
})
export class BooksService {
    constructor(private http: HttpClient, private apollo: Apollo, private central:CentralService ) { }
    public getBooks():Observable<Book[]> {
        return this.apollo.watchQuery<any>({
            query: getBooks
          })
          .valueChanges
          .pipe(
            map( (response:any) => {
                this.central.emitLoading(false);
                return response.data.books
            })
          );
    }

    public createBook(title, ISBN, quantity, genre, author, pages, cover){
        return this.apollo.mutate({
            mutation: createBook,
            variables: {
               title,
               ISBN,
               quantity,
               genre,
               author,
               pages,
               cover
            },
            refetchQueries:  [{
                query: getBooks
            }]
        }).subscribe(x => {
            alert("¡Libro Creado!");
            this.central.emitLoading(false);
            console.log(x)
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }

    public deleteBook(id){
        return this.apollo.mutate({
            mutation: deleteBook,
            variables: {
               id
            },
            refetchQueries:  [{
                query: getBooks
            }]
        }).subscribe(x => {
            this.central.emitLoading(false);
            alert("¡Libro Eliminado!");
            console.log(x)
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }

    public updateBook(id, title, ISBN, quantity, genre, author, pages, cover){
        return this.apollo.mutate({
            mutation: updateBook,
            variables: {
               id,
               title,
               ISBN,
               quantity,
               genre,
               author,
               pages,
               cover
            },
            refetchQueries:  [{
                query: getBooks
            }]
        }).subscribe(x => {
            this.central.emitLoading(false);
            alert("¡Libro Actualizado!");
            console.log(x)
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }

}