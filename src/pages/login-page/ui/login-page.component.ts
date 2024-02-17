import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import {
  AuthType,
  LoginFormComponent,
  RegistrarionFormComponent,
  authActions,
  loginFormActions,
  selectAuthError,
  selectAuthType,
  selectIsAuthorized
} from 'features/auth';
import { selectAuthIsLoading } from 'features/auth/model/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { ButtonComponent } from 'shared/ui/button/button.component';
import { LoaderComponent } from 'shared/ui/loader/loader.component';
import { StatusMessageComponent } from 'shared/ui/status-message/status-message.component';
import { TextComponent } from 'shared/ui/text/text.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    LoginFormComponent,
    RegistrarionFormComponent,
    ButtonComponent,
    TextComponent,
    LoaderComponent,
    StatusMessageComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnDestroy {
  constructor(private store: Store<StateSchema>) {}
  authType: Observable<AuthType> = this.store.select(selectAuthType)
  authError: Observable<string | undefined> = this.store.select(selectAuthError)
  isAuthorized: Observable<boolean> = this.store.select(selectIsAuthorized)
  isLoading: Observable<boolean> = this.store.select(selectAuthIsLoading)

  setAuthType(type: AuthType) {
    this.store.dispatch(loginFormActions.clearForm())
    this.store.dispatch(loginFormActions.setType({ authType: type }))
    this.store.dispatch(authActions.clearError())
  }

  ngOnDestroy(): void {
    this.store.dispatch(loginFormActions.clearForm())
  }
}
