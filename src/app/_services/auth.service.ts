import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import user from '../staticData/user.json';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenStorageService } from '../_services/token-storage.service';


const AUTH_API = 'https://test.greenkoncepts.com/gktest/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) {
    
   }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  create(user): Observable<any> {
    let token = this.tokenStorage.getToken();
    let user1:any=user
    let req={"customerName":user1.customerName,
              "customerAge":user1.age,
            "customerAddress":user1.address}

    return this.http.post(AUTH_API+ 'createCustomer?token='+token, req, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 

  loginUser(req): Observable<any> {
    return this.http.get(AUTH_API + "login?username=" + req.userName +"&password=" +req.password)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  details(): Observable<any> {
    let token = this.tokenStorage.getToken();
    return this.http.get(AUTH_API +"getAllOrders?token="+token)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  logOut(): Observable<any> {
    let token = this.tokenStorage.getToken();
    return this.http.get(AUTH_API +"logout?token="+token)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getHierachy(): Observable<any> {
    let token = this.tokenStorage.getToken();
    return this.http.get(AUTH_API +"node-hierarchy?token="+token)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
    errorHandler(error) {
       let errorMessage = "error"
      return throwError(errorMessage);
   }


}