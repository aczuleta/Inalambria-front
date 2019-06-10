// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Apollo } from 'apollo-angular';
import {Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {getReservasUsuario} from './queries/reservas';
import {getBooks} from './queries/books';
import {createReserva, devolverLibro} from './mutations/reservas'
import gql from 'graphql-tag';
import { Book, Reserva } from '../models/models.barrel';
import { CentralService } from './central.service';


@Injectable({
    providedIn: 'root',
})
export class ReservasService {
    constructor(private http: HttpClient, private apollo: Apollo, private central:CentralService) { }
    public getReservasUsuario(usuario):Observable<any[]> {
        return this.apollo.watchQuery<any>({
            query: getReservasUsuario,
            variables: {
                usuario
            }
          })
          .valueChanges
          .pipe(
            map( (response:any) => {
                return response.data.reservasUsuario
            })
          );
    }

    public createReserva(idLibro, idPersona){
        const usuario = idPersona;
        return this.apollo.mutate({
            mutation: createReserva,
            variables: {
               idLibro,
               idPersona
            },
            refetchQueries:  [
                {
                    query: getReservasUsuario,
                    variables:{
                        usuario
                    }
                },
                {
                    query: getBooks
                }
            ]
        }).subscribe(x => {
            alert("¡Reserva Realizada!");
            location.reload();
            console.log(x)
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }

    public devolverLibro(id, usuario){
        return this.apollo.mutate({
            mutation: devolverLibro,
            variables: {
                id
            },
            refetchQueries: [
                {
                    query: getReservasUsuario,
                    variables: {
                        usuario
                    }
                },
                {
                    query: getBooks
                }
            ]
        }).subscribe(x => {
            alert("¡Libro devuelto!");
            console.log(x)
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }

}