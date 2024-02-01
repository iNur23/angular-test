import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type AuthType = "signIn" | "signUp"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  type$ = new BehaviorSubject<AuthType>("signIn")
  nickname$ = new BehaviorSubject<string>("")
  password$ = new BehaviorSubject<string>("")

  constructor() { }

  setType(type: AuthType) {
    this.type$.next(type)
  }
  onChangeNickname(e: EventTarget | null) {
    if (!e) return
    this.nickname$.next((e as HTMLInputElement).value)
  }
  onChangePassword(e: EventTarget | null) {
    if (!e) return
    this.password$.next((e as HTMLInputElement).value)
  }

  buttonOnClick() {
    console.log(this.nickname$.getValue(), this.password$.getValue())
  }
}
