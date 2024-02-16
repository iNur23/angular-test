import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { Hero } from 'entities/hero';
import { HeroesPaginationComponent } from 'features/heroes-pagination';
import { Observable } from 'rxjs';
import { LoaderComponent } from 'shared/ui/loader/loader.component';
import { TextComponent } from 'shared/ui/text/text.component';
import {
  HeroesListComponent,
  heroesListActions,
  selectHeroesListData,
  selectHeroesListError,
  selectHeroesListIsLoading,
  selectHeroesListSearch
} from 'widgets/heroes-list';

@Component({
  selector: 'app-heroes-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroesListComponent,
    TextComponent,
    HeroesPaginationComponent,
    LoaderComponent
  ],
  templateUrl: './heroes-page.component.html',
  styleUrl: './heroes-page.component.scss'
})
export class HeroesPageComponent {
  constructor(private store: Store<StateSchema>) {}

  heroes: Observable<Hero[]> = this.store.select(selectHeroesListData)
  isLoading: Observable<boolean> = this.store.select(selectHeroesListIsLoading)
  error: Observable<string | undefined> = this.store.select(selectHeroesListError)
  search: Observable<string> = this.store.select(selectHeroesListSearch)

  ngOnInit(): void {
    this.store.dispatch(heroesListActions.loadHeroesList())
  }
}
