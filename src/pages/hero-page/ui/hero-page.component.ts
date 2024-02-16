import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import {
  Hero,
  HeroCharacterComponent,
  heroActions,
  selectHeroData, selectHeroError,
  selectHeroIsLoading
} from 'entities/hero';
import { Observable } from 'rxjs';
import { ButtonComponent } from 'shared/ui/button/button.component';
import { LoaderComponent } from 'shared/ui/loader/loader.component';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroCharacterComponent,
    ButtonComponent,
    LoaderComponent
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent implements OnInit, OnDestroy {
  @Input() id: string

  constructor(private store: Store<StateSchema>) {}

  hero: Observable<Hero | undefined> = this.store.select(selectHeroData)
  error: Observable<string | undefined> = this.store.select(selectHeroError)
  isLoading: Observable<boolean> = this.store.select(selectHeroIsLoading)

  ngOnInit() {
    this.store.dispatch(heroActions.loadHero({id: this.id}))
  }

  ngOnDestroy() {
    this.store.dispatch(heroActions.clearHero())
  }
}
