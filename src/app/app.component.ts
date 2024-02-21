import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from 'widgets/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-test';
}
