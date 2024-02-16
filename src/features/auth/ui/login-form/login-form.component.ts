import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { Observable } from 'rxjs';
import {
  selectLoginFormErrors,
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
import { LoginFormErrors } from 'features/auth/model/types/login-form';
import { LoginFormErrorsService } from 'features/auth/model/services/login-form-errors.service';

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
  
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  username: Observable<string> = this.store.select(selectLoginFormUsername)
  password: Observable<string> = this.store.select(selectLoginFormPassword)
  validationErrors: Observable<LoginFormErrors> = this.store.select(selectLoginFormErrors)

  onChangeUsername(e: EventTarget | null) {
    this.store.dispatch(loginFormActions.setUsername({ username: (e as HTMLInputElement).value }))
  }
  onChangePassword(e: EventTarget | null) {
    this.store.dispatch(loginFormActions.setPassword({ password: (e as HTMLInputElement).value }))
  }

  onSubmit() {
    const errors = LoginFormErrorsService.getErrors(this.form)
    if (errors) return this.store.dispatch(loginFormActions.setErrors({errors}))

    this.store.dispatch(loginFormActions.setErrors({ errors: {} }))
    this.store.dispatch(authActions.logIn())
    this.store.dispatch(loginFormActions.clearForm())
    this.form.reset()
  }
}


