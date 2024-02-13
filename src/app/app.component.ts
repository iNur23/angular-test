import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../widgets/navbar/navbar.component';
import { HeroesListComponent } from '../widgets/heroes-list/ui/heroes-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroesListComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-test';
}
