import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { LoginFormComponent, UserData, authActions, selectAuthData, selectIsAuthorized } from 'features/auth';
import { Observable } from 'rxjs';
import { SearchComponent } from 'features/searchHero';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from 'shared/ui/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LoginFormComponent,
    SearchComponent,
    CommonModule,
    RouterModule,
    ButtonComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store<StateSchema>, private router: Router) {}

  userData: Observable<UserData | undefined> = this.store.select(selectAuthData)
  isAuthorized = this.store.select(selectIsAuthorized)

  ngOnInit(): void {
    this.store.dispatch(authActions.init())
  }

  onSignOut() {
    this.store.dispatch(authActions.logOut())
    this.router.navigate(['/login'])
  }
}
