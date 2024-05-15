import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { apiUrls } from '../app/api.url';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  //call server for sign_up
  registerService(registerObj: any){
    return this.http.post<any>(`${apiUrls.authServiceApi}sign_up`, registerObj)
  };
  
  ////call server for login
  LoginService(loginObj: any): Observable<any> {
    console.log("inside service login",loginObj)
    return this.http.post<any>(`${apiUrls.authServiceApi}login`, loginObj)
  }

  //  when logged in want to show employee page
  isLoggedIn(){
    return !!localStorage.getItem("user_id")
  }

}
