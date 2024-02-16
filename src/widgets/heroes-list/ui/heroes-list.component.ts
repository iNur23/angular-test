import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero, HeroCardComponent } from 'entities/hero';
import { TextComponent } from 'shared/ui/text/text.component';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [
    HeroCardComponent,
    CommonModule,
    TextComponent
  ],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent {
  @Input() heroes: Hero[] = []
}
