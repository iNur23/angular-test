import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { Hero, HeroCardComponent } from 'entities/hero';
import { HeroesPaginationComponent } from 'features/heroes-pagination';
import { Observable } from 'rxjs';
import { LoaderComponent } from 'shared/ui/loader/loader.component';
import { StatusMessageComponent } from 'shared/ui/status-message/status-message.component';
import { TextComponent } from 'shared/ui/text/text.component';
import { selectHeroesData, selectHeroesError, selectHeroesHasMore, selectHeroesIsLoading } from '../model/selectors/heroes-page.selectors';
import { heroesActions } from '../model/slice/heroes/heroes.actions';
import { selectSearchQuery } from 'features/search-hero';

@Component({
  selector: 'app-heroes-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroCardComponent,
    TextComponent,
    HeroesPaginationComponent,
    LoaderComponent,
    StatusMessageComponent
  ],
  templateUrl: './heroes-page.component.html',
  styleUrl: './heroes-page.component.scss'
})
export class HeroesPageComponent {
  constructor(private store: Store<StateSchema>) {}

  heroes: Observable<Hero[]> = this.store.select(selectHeroesData)
  hasMore: Observable<boolean> = this.store.select(selectHeroesHasMore)
  isLoading: Observable<boolean> = this.store.select(selectHeroesIsLoading)
  error: Observable<string | undefined> = this.store.select(selectHeroesError)
  search: Observable<string> = this.store.select(selectSearchQuery)

  ngOnInit(): void {
    this.store.dispatch(heroesActions.loadHeroes())
  }

  onChangePagination() {
    this.store.dispatch(heroesActions.loadHeroes())
  }
}
