import { Component, Input } from '@angular/core';
import { Hero } from 'entities/hero/model/types/hero';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss'
})
export class HeroCardComponent {
  @Input() hero: Hero
}
