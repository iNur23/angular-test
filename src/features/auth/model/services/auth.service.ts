import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { USERDATA_LOCALSTORAGE_KEY, USERS_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface AuthData {
  username: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http: HttpClient) { }
  
  signIn(data: AuthData) {
    return this.http.post<AuthData>('http://localhost:8000/login', data)
  }

  signUp(data: AuthData) {
    return this.http.post<AuthData>('http://localhost:8000/registration', data)
  }
}
