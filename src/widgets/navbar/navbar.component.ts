import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { LoginFormComponent, authActions, selectAuthData, selectIsAuthorized } from 'features/auth';
import { Observable } from 'rxjs';
import { SearchComponent } from 'features/searchHero';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LoginFormComponent,
    SearchComponent,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store<StateSchema>) {}

  userData: Observable<{ username: string; } | undefined> = this.store.select(selectAuthData)
  isAuthorized = this.store.select(selectIsAuthorized)

  ngOnInit(): void {
    this.store.dispatch(authActions.init())
  }

  onSignOut() {
    this.store.dispatch(authActions.logOut())
  }
}
