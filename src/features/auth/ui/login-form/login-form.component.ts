import { Component, OnInit } from '@angular/core';
import { USERS_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { AuthType } from '../../model/types/login-form';
import { Observable } from 'rxjs';
import {
  selectAuthType,
  selectLoginFormError,
  selectLoginFormPassword,
  selectLoginFormUsername
} from '../../model/selectors/login-form.selectors';
import { loginFormActions } from '../../model/slice/login-form.slice/login-form.actions';
import { authActions } from '../../model/slice/auth.slice/auth.actions';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'shared/ui/button/button.component';
import { InputComponent } from 'shared/ui/input/input.component';
import { TextComponent } from 'shared/ui/text/text.component';
import { SvgComponent } from 'shared/ui/svg/svg.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonComponent,
    InputComponent,
    TextComponent,
    SvgComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  constructor(private store: Store<StateSchema>) {}

  username: Observable<string> = this.store.select(selectLoginFormUsername)
  password: Observable<string> = this.store.select(selectLoginFormPassword)
  validationError: Observable<string | undefined> = this.store.select(selectLoginFormError)

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
