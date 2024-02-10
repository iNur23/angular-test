import { Injectable } from '@angular/core';
import { USERDATA_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor (private router: Router) {}
  canActivate(): boolean {
    const userData = localStorage.getItem(USERDATA_LOCALSTORAGE_KEY)
    if (!userData) {
      this.router.navigate([''])
      return false
    }
    return true
  }
}
