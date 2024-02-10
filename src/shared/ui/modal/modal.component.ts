import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  isOpened = false

  constructor() { }

  onContentClick(e: MouseEvent) {
    e.stopPropagation()
  }

  open = () => {
    this.isOpened = true
  }

  close = () => {
    this.isOpened = false
  }
}
