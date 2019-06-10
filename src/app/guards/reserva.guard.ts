import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CanReservar implements CanActivate {
    constructor(private router: Router){}
    canActivate(route:ActivatedRouteSnapshot, 
    state:RouterStateSnapshot):Observable<boolean> | boolean{
        let user:any = JSON.parse(localStorage.getItem("user"));
        if(user && user.rol === "USER"){
            return true;
        }else {
            this.router.navigate(["/auth"]);
            return false;
        }
    }
}