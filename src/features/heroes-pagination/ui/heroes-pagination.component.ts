import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { Observable } from 'rxjs';
import { ButtonComponent } from 'shared/ui/button/button.component';
import {
  heroesListActions,
  selectHeroesListHasMore,
  selectHeroesListLimit,
  selectHeroesListPage
} from 'widgets/heroes-list';

@Component({
  selector: 'app-heroes-pagination',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './heroes-pagination.component.html',
  styleUrl: './heroes-pagination.component.scss'
})
export class HeroesPaginationComponent {
  constructor(private store: Store<StateSchema>) {}

  page: Observable<number> = this.store.select(selectHeroesListPage)
  limit: Observable<number> = this.store.select(selectHeroesListLimit)
  hasMore: Observable<boolean> = this.store.select(selectHeroesListHasMore)

  setPage = (page: number) => {
    this.store.dispatch(heroesListActions.setPage({ page }))
    this.store.dispatch(heroesListActions.loadHeroesList())
  }
  setPreviousPage = () => {
    this.store.dispatch(heroesListActions.setPreviousPage())
    this.store.dispatch(heroesListActions.loadHeroesList())
  }
  setNextPage = () => {
    this.store.dispatch(heroesListActions.setNextPage())
    this.store.dispatch(heroesListActions.loadHeroesList())
  }
}
