import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from 'entities/hero/model/types/hero';
import { SvgComponent } from 'shared/ui/svg/svg.component';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [
    RouterModule,
    SvgComponent
  ],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss'
})
export class HeroCardComponent {
  @Input() hero: Hero
}
