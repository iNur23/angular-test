import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../model/types/hero';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { heroActions } from 'entities/hero/model/slice/hero.actions';
import { Observable } from 'rxjs';
import { selectHeroData, selectHeroError, selectHeroIsLoading } from 'entities/hero/model/selectors/hero.selectors';

@Component({
  selector: 'app-hero-character',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hero-character.component.html',
  styleUrl: './hero-character.component.scss'
})
export class HeroCharacterComponent implements OnInit {
  @Input() id: string
  constructor(private store: Store<StateSchema>) {}

  hero: Observable<Hero | undefined> = this.store.select(selectHeroData)
  error: Observable<string | undefined> = this.store.select(selectHeroError)
  isLoading: Observable<boolean> = this.store.select(selectHeroIsLoading)

  ngOnInit() {
    this.store.dispatch(heroActions.loadHero({id: this.id}))
  }
}
