import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { LoginFormComponent, UserData, authActions, selectAuthData, selectIsAuthorized } from 'features/auth';
import { Observable } from 'rxjs';
import { SearchComponent } from 'features/search-hero';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from 'shared/ui/button/button.component';
import { heroesActions } from 'pages/heroes-page';
import { paginationActions } from 'features/heroes-pagination';

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
export class NavbarComponent {
  constructor(private store: Store<StateSchema>, private router: Router) {
    this.store.dispatch(authActions.init())
  }

  userData: Observable<UserData | undefined> = this.store.select(selectAuthData)
  isAuthorized = this.store.select(selectIsAuthorized)

  onSignOut() {
    this.store.dispatch(authActions.logOut())
    this.router.navigate(['/login'])
  }

  onSearchSubmit() {
    this.store.dispatch(paginationActions.setPage({ page: 1 }))
    this.store.dispatch(heroesActions.loadHeroes())
    this.router.navigate(['/heroes'])
  }
}
