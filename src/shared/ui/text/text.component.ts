import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type TextVariant = 'title' | 'subtitle' | 'normal' | 'handwrite'
type TextColor = 'primary' | 'secondary' | 'accent' | 'green' | 'red'

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  @Input() variant: TextVariant = 'normal'
  @Input() color: TextColor = 'primary'
}
