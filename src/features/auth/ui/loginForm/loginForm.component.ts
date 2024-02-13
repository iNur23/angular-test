import { Component, OnInit } from '@angular/core';
import { USERS_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { AuthType } from '../../model/types/loginForm';
import { Observable } from 'rxjs';
import {
  selectLoginFormAuthType,
  selectLoginFormError,
  selectLoginFormPassword,
  selectLoginFormUsername
} from '../../model/selectors/login-form.selectors';
import { loginFormActions } from '../../model/slice/login-form.slice/login-form.actions';
import { authActions } from '../../model/slice/auth.slice/auth.actions';
import { CommonModule } from '@angular/common';
import { selectAuthError } from 'features/auth/model/selectors/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginForm',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './loginForm.component.html',
  styleUrl: './loginForm.component.scss'
})
export class LoginFormComponent {
  constructor(private store: Store<StateSchema>) {}

  authType: Observable<AuthType> = this.store.select(selectLoginFormAuthType)
  username: Observable<string> = this.store.select(selectLoginFormUsername)
  password: Observable<string> = this.store.select(selectLoginFormPassword)
  validationError: Observable<string | undefined> = this.store.select(selectLoginFormError)
  authError: Observable<string | undefined> = this.store.select(selectAuthError)

  setAuthType(type: AuthType) {
    this.store.dispatch(loginFormActions.setType({ authType: type }))
  }
  onChangeUsername(e: EventTarget | null) {
    this.store.dispatch(loginFormActions.setUsername({ username: (e as HTMLInputElement).value }))
  }
  onChangePassword(e: EventTarget | null) {
    this.store.dispatch(loginFormActions.setPassword({ password: (e as HTMLInputElement).value }))
  }

  onSubmit() {
    this.store.dispatch(authActions.logIn())
    this.store.dispatch(loginFormActions.clearForm())
  }
}
