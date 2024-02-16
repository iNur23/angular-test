import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputType = 'text' | 'password' | 'number' | 'email'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    TextComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => InputComponent),
       multi: true
    }
 ]
})
export class InputComponent {
  @Input() placeholder: string = "";
  @Input() value: string = "";
  @Input() type: InputType = 'text';
  @Input() formControl: FormControl = new FormControl();
  @Input() error?: string;

  writeValue(value: string): void {
    this.value = value ? value : ''
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }
}