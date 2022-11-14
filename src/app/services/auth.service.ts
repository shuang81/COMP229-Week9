import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const AUTH_API = environment.apiUrl + '/auth/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(AUTH_API + "login", {
      username,
      password
    }, httpOptions)
  }

  register(username: string, password: string, emailAddress: string, displayName: string){
    return this.httpClient.post(AUTH_API + "register", {
      username,
      password,
      emailAddress,
      displayName
    }, httpOptions)
  }



}
