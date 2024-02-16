import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { selectLoginFormUsername, selectLoginFormPassword, selectLoginFormName, selectLoginFormSurname, selectLoginFormAvatar, selectLoginFormErrors } from '../../model/selectors/login-form.selectors';
import { authActions } from '../../model/slice/auth.slice/auth.actions';
import { loginFormActions } from '../../model/slice/login-form.slice/login-form.actions';
import { Observable } from 'rxjs';
import { ButtonComponent } from 'shared/ui/button/button.component';
import { InputComponent } from 'shared/ui/input/input.component';
import { TextComponent } from 'shared/ui/text/text.component';
import { SvgComponent } from 'shared/ui/svg/svg.component';
import { LoginFormErrors } from '../../model/types/login-form';
import { LoginFormErrorsService } from '../../model/services/login-form-errors.service';

@Component({
  selector: 'app-registrarion-form',
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
  templateUrl: './registrarion-form.component.html',
  styleUrl: './registrarion-form.component.scss'
})
export class RegistrarionFormComponent {
  constructor(private store: Store<StateSchema>) {}

  username: Observable<string> = this.store.select(selectLoginFormUsername)
  password: Observable<string> = this.store.select(selectLoginFormPassword)
  name: Observable<string> = this.store.select(selectLoginFormName)
  surname: Observable<string> = this.store.select(selectLoginFormSurname)
  avatar: Observable<string> = this.store.select(selectLoginFormAvatar)
  validationErrors: Observable<LoginFormErrors> = this.store.select(selectLoginFormErrors)

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onChangeUsername(e: EventTarget | null) {
    this.store.dispatch(loginFormActions.setUsername({ username: (e as HTMLInputElement).value }))
  }
  onChangePassword(e: EventTarget | null) {
    this.store.dispatch(loginFormActions.setPassword({ password: (e as HTMLInputElement).value }))
  }
  onChangeName(e: EventTarget | null) {
    this.store.dispatch(loginFormActions.setName({ name: (e as HTMLInputElement).value }))
  }
  onChangeSurname(e: EventTarget | null) {
    this.store.dispatch(loginFormActions.setSurname({ surname: (e as HTMLInputElement).value }))
  }
  onChangeAvatar(e: EventTarget | null) {
    this.store.dispatch(loginFormActions.setAvatar({ avatar: (e as HTMLInputElement).value }))
  }

  onSubmit() {
    const errors = LoginFormErrorsService.getErrors(this.form)
    if (errors) return this.store.dispatch(loginFormActions.setErrors({errors}))

    this.store.dispatch(authActions.logIn())
  }
}
