import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData, UserData } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http: HttpClient) { }
  
  signIn(data: AuthData) {
    return this.http.post<UserData>('http://localhost:8000/login', data)
  }

  signUp(data: AuthData) {
    return this.http.post<UserData>('http://localhost:8000/registration', data)
  }
}
