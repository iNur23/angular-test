import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonVariant = 'normal' | 'inverted' | 'outline' | 'accent' | 'linkLike' | 'clear'
type ButtonShape = 'normal' | 'cyrcle' 
type ButtonType = 'button' | 'submit' | 'reset' 

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'normal'
  @Input() shape: ButtonShape = 'normal'
  @Input() type: ButtonType = 'button'
  @Output() onClick = new EventEmitter<any>()

  onClickButton(event: EventTarget) {
    this.onClick.emit(event);
  }
}
