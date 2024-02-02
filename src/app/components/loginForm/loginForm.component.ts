import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { USERS_LOCALSTORAGE_KEY } from '../../../resources/const/localStorage';
import { ModalService } from '../../services/modal.service';

type AuthType = "signIn" | "signUp"

@Component({
  selector: 'app-loginForm',
  standalone: true,
  imports: [],
  templateUrl: './loginForm.component.html',
  styleUrl: './loginForm.component.scss'
})
export class LoginFormComponent implements OnInit {
  type = new BehaviorSubject<AuthType>("signIn")
  nickname = new BehaviorSubject<string>("")
  password = new BehaviorSubject<string>("")
  error?: string

  constructor(private authService: AuthService, private modalService: ModalService) {

  }

  ngOnInit(): void {
    if (!localStorage.getItem(USERS_LOCALSTORAGE_KEY)) localStorage.setItem(USERS_LOCALSTORAGE_KEY, '[]')
  }
  setType(type: AuthType) {
    this.type.next(type)
  }
  onChangeNickname(e: EventTarget | null) {
    if (!e) return
    this.nickname.next((e as HTMLInputElement).value)
  }
  onChangePassword(e: EventTarget | null) {
    if (!e) return
    this.password.next((e as HTMLInputElement).value)
  }
  clear() {
    this.password.next("")
    this.nickname.next("")
    this.error = undefined
    this.type.next("signIn")
  }
  buttonOnClick() {
    try {
      const authData = {
        nickname: this.nickname.value,
        password: this.password.value
      }
      if (this.type.value === "signIn") {
        this.authService.signIn(authData)
      }
      else {
        this.authService.signUp(authData)
      }
      this.clear()
      this.modalService.close()
    }
    catch(e) {
      this.error = e as string
    }
  }
}
