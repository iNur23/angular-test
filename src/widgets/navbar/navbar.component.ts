import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { LoginFormComponent } from '../../features/auth/ui/loginForm/loginForm.component';
import { SearchComponent } from '../../features/searchHero/ui/search.component';
import { AuthService } from '../../features/auth/model/services/auth.service';
import { CommonModule } from '@angular/common';
import { USERDATA_LOCALSTORAGE_KEY } from '../../shared/const/localStorage';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ModalComponent,
    LoginFormComponent,
    SearchComponent,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  userData?: { nickname: string }

  constructor(public authService: AuthService) {

  }

  ngOnInit(): void {
    const dataString = localStorage.getItem(USERDATA_LOCALSTORAGE_KEY)
    if (dataString) {
      const userData = JSON.parse(dataString)
      this.userData = userData
    }
  }

}
