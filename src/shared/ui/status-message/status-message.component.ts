import { Component, Input } from '@angular/core';
import { TextComponent } from 'shared/ui/text/text.component';

type StatusVariants = 'positive' | 'negative' | 'neutral'

@Component({
  selector: 'app-status-message',
  standalone: true,
  imports: [
    TextComponent
  ],
  templateUrl: './status-message.component.html',
  styleUrl: './status-message.component.scss'
})
export class StatusMessageComponent {
  @Input() variant: StatusVariants = 'positive'
}
