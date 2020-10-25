import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = "/api/endpoint";
  constructor(private httpClient: HttpClient) { }

  getAccounts() {
    return this.httpClient.get(this.apiUrl);
  }
}
