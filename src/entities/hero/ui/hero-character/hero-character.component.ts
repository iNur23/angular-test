import { Component, Input, OnInit } from '@angular/core';
import { Hero, HeroSection } from '../../model/types/hero';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { heroActions } from 'entities/hero/model/slice/hero.actions';
import { Observable } from 'rxjs';
import { selectHeroSection } from 'entities/hero/model/selectors/hero.selectors';
import { ButtonComponent } from 'shared/ui/button/button.component';
import { TextComponent } from 'shared/ui/text/text.component';

@Component({
  selector: 'app-hero-character',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TextComponent
  ],
  templateUrl: './hero-character.component.html',
  styleUrl: './hero-character.component.scss'
})
export class HeroCharacterComponent {
  @Input() hero: Hero

  constructor(private store: Store<StateSchema>) {}
  section: Observable<HeroSection> = this.store.select(selectHeroSection)

  setSection(section: string) {
    this.store.dispatch(heroActions.setHeroSection({section: section as HeroSection}))
  }
}
