import { Component, Input } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { CommonModule } from '@angular/common';

type InputColor = 'normal' | 'inverted'
type InputType = 'text' | 'password' | 'number' | 'email'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    TextComponent
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = "";
  @Input() value: string = "";
  @Input() type: InputType = 'text';
}
