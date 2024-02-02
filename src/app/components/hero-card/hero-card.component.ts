import { Component, Input } from '@angular/core';
import { someHero } from '../../data/heroes';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss'
})
export class HeroCardComponent {
  @Input() hero: {name: string, id: number}
}
