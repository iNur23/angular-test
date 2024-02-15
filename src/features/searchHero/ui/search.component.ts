import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { heroesListActions } from 'widgets/heroes-list';
import { selectHeroesListSearch } from 'widgets/heroes-list/model/selectors/heroes-list.selectors';
import { searchActions } from '../model/slice/search.actions';
import { selectSearchQuery } from '../model/selectors/search.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SvgComponent } from 'shared/ui/svg/svg.component';
import { InputComponent } from 'shared/ui/input/input.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SvgComponent,
    InputComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  query: string

  constructor(private store: Store<StateSchema>, private router: Router) {
    this.store.select(selectSearchQuery).subscribe(query => this.query = query)
  }

  onChangeSearch(e: EventTarget | null) {
    const query = (e as HTMLInputElement).value
    this.store.dispatch(searchActions.setSearch({ query }))
  }

  onSubmit() {
    this.store.dispatch(heroesListActions.setSearch({ search: this.query }))
    this.store.dispatch(searchActions.clear())
    this.router.navigate(['/heroes'])
    this.store.dispatch(heroesListActions.loadHeroesList())
  }
}
