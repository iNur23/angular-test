import { Injectable, OnInit } from '@angular/core';
import { USERDATA_LOCALSTORAGE_KEY, USERS_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface AuthData {
  nickname: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor() { }
  
  signIn(data: AuthData) {
    const users = JSON.parse(localStorage.getItem(USERS_LOCALSTORAGE_KEY) as string) as AuthData[]
    const user = users.find((user) => user.nickname === data.nickname)
    if (!user) throw new Error('Пользователь не найден')
    if (user.password !== data.password) throw new Error('Неверный пароль')
    localStorage.setItem(USERDATA_LOCALSTORAGE_KEY, JSON.stringify({ nickname: data.nickname }))
    window.location.reload()
  }

  signUp(data: AuthData) {
    const users = JSON.parse(localStorage.getItem(USERS_LOCALSTORAGE_KEY) as string) as AuthData[]
    const user = users.find((user) => user.nickname === data.nickname)
    if (user) throw new Error('Пользователь уже существует')
    users.push(data)
    localStorage.setItem(USERS_LOCALSTORAGE_KEY, JSON.stringify(users))
  }

  signOut() {
    localStorage.removeItem(USERDATA_LOCALSTORAGE_KEY)
    window.location.reload()
  }
}
