import { Component, OnInit } from '@angular/core';
import { HeroCardComponent } from '../../../entities/hero/ui/hero-card/hero-card.component';
import { CommonModule } from '@angular/common';
import { Hero } from 'entities/hero';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import {
  selectHeroesListData,
  selectHeroesListError,
  selectHeroesListIsLoading,
  selectHeroesListLimit,
  selectHeroesListPage,
  selectHeroesListSearch
} from '../model/selectors/heroes-list.selectors';
import { heroesListActions } from '../model/slice/heroes-list.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [
    HeroCardComponent,
    CommonModule
  ],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent implements OnInit {

  constructor(private store: Store<StateSchema>) {}

  ngOnInit(): void {
    this.store.dispatch(heroesListActions.loadHeroesList())
  }

  search: Observable<string> = this.store.select(selectHeroesListSearch)
  page: Observable<number> = this.store.select(selectHeroesListPage)
  limit: Observable<number> = this.store.select(selectHeroesListLimit)
  heroes: Observable<Hero[]> = this.store.select(selectHeroesListData)
  isLoading: Observable<boolean> = this.store.select(selectHeroesListIsLoading)
  error: Observable<string | undefined> = this.store.select(selectHeroesListError)

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
