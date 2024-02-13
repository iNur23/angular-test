import { Injectable } from '@angular/core';
import { USERDATA_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { selectIsAuthorized } from 'features/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isAuthorized: boolean
  constructor (private router: Router, private store: Store<StateSchema>) {
    this.store.select(selectIsAuthorized).subscribe(isAuthorized => {
      this.isAuthorized = isAuthorized
    })
  }

  canActivate(): boolean {
    if (!this.isAuthorized) {
      this.router.navigate(['/login'])
      return false
    }
    return true
  }
}
