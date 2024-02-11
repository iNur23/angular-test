import { Component, Input } from '@angular/core';
import { HeroCharacterComponent } from 'entities/hero';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [
    HeroCharacterComponent
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent {
  @Input() id: string
}
