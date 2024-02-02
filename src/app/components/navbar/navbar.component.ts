import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../modal/modal.component';
import { LoginFormComponent } from '../loginForm/loginForm.component';
import { SearchComponent } from '../search/search.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { USERDATA_LOCALSTORAGE_KEY } from '../../../resources/const/localStorage';

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

  constructor(public modalService: ModalService, public authService: AuthService) {

  }

  ngOnInit(): void {
    const dataString = localStorage.getItem(USERDATA_LOCALSTORAGE_KEY)
    if (dataString) {
      const userData = JSON.parse(dataString)
      this.userData = userData
    }
  }

}
