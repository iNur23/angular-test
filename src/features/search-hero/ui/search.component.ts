import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { searchActions } from '../model/slice/search.actions';
import { CommonModule } from '@angular/common';
import { SvgComponent } from 'shared/ui/svg/svg.component';
import { InputComponent } from 'shared/ui/input/input.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SvgComponent,
    InputComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() onSearchSubmit: EventEmitter<any> = new EventEmitter()
  queryControl = new FormControl('', { nonNullable: true })
  form = new FormGroup({
    query: this.queryControl
  })

  constructor(private store: Store<StateSchema>) {}

  onSubmit() {
    this.store.dispatch(searchActions.setQuery({ query: this.queryControl.value }))
    this.queryControl.reset()
    this.onSearchSubmit.emit()
  }
}
