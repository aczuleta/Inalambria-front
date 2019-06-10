// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Apollo } from 'apollo-angular';
import {Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {getUsuarios, getUserUsername} from './queries/usuarios';
import {createUsuario} from './mutations/usuarios'
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {
    constructor(private http: HttpClient, private apollo: Apollo) { }

    public getUsuario(username):Observable<any> {
        console.log("estamos llegando hasta acá", username);
        return this.apollo.watchQuery<any>({
            query: getUserUsername,
            variables: {
                username
            }
          })
          .valueChanges
          .pipe(
            map( (response:any) => {
                return response.data.userByUsername
            })
          );
    }

    public createUsuario(username, fullname, rol){
        return this.apollo.mutate({
            mutation: createUsuario,
            variables: {
               username,
               fullname,
               rol
            }
        }).subscribe(x => {
            alert("¡Usuario Creado!");
            location.reload();
            console.log(x)
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }


}