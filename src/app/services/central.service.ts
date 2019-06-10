// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Apollo } from 'apollo-angular';
import {Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {getUsuarios, getUserUsername} from './queries/usuarios';
import {createUsuario} from './mutations/usuarios'
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root',
})
export class CentralService {
    constructor(private http: HttpClient, private apollo: Apollo) { }
    public subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public emitLoading(value:boolean){
        this.subject.next(value);
    }
}
