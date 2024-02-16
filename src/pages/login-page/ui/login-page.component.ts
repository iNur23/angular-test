import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import {
  AuthType,
  LoginFormComponent,
  RegistrarionFormComponent,
  loginFormActions,
  selectAuthError,
  selectAuthType
} from 'features/auth';
import { Observable } from 'rxjs';
import { ButtonComponent } from 'shared/ui/button/button.component';
import { TextComponent } from 'shared/ui/text/text.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    LoginFormComponent,
    RegistrarionFormComponent,
    ButtonComponent,
    TextComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(private store: Store<StateSchema>) {}
  authType: Observable<AuthType> = this.store.select(selectAuthType)
  authError: Observable<string | undefined> = this.store.select(selectAuthError)

  setAuthType(type: AuthType) {
    this.store.dispatch(loginFormActions.clearForm())
    this.store.dispatch(loginFormActions.setType({ authType: type }))
  }
}
