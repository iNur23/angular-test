import { Component } from '@angular/core';
import { HeroesListComponent } from 'widgets/heroes-list';

@Component({
  selector: 'app-heroes-page',
  standalone: true,
  imports: [
    HeroesListComponent
  ],
  templateUrl: './heroes-page.component.html',
  styleUrl: './heroes-page.component.scss'
})
export class HeroesPageComponent {

}
