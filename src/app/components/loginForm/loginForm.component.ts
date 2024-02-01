import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginForm',
  standalone: true,
  imports: [],
  templateUrl: './loginForm.component.html',
  styleUrl: './loginForm.component.scss'
})
export class LoginFormComponent {
  constructor(public authService: AuthService) {}
}
