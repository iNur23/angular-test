import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../model/types/hero';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { heroActions } from 'entities/hero/model/slice/hero.actions';

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
  hero: Hero
  error: string
  isLoading: boolean

  constructor(private store: Store<StateSchema>) {
    this.store.select((state) => state.hero).subscribe(state => {
      if (state.data) this.hero = state.data
      if (state.error) this.error = state.error
      this.isLoading = state.isLoading
    })
  }

  ngOnInit() {
    this.store.dispatch(heroActions.loadHero({id: this.id}))
  }
}
