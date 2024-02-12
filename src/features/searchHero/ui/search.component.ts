import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { heroesListActions } from 'widgets/heroes-list';
import { selectHeroesListSearch } from 'widgets/heroes-list/model/selectors/heroes-list.selectors';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  search: string

  constructor(private store: Store<StateSchema>) {
    this.store
      .pipe(select(selectHeroesListSearch))
      .subscribe(stateSearch => this.search = stateSearch)
  }

  onChangeSearch(e: EventTarget | null) {
    const newSearch = (e as HTMLInputElement).value
    this.store.dispatch(heroesListActions.setSearch({ search: newSearch }))
  }

  onClickButton() {
    this.store.dispatch(heroesListActions.loadHeroesList())
  }
}
