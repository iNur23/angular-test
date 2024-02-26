import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { Observable } from 'rxjs';
import { ButtonComponent } from 'shared/ui/button/button.component';
import { selectHeroesPaginationLimit, selectHeroesPaginationPage } from '../model/selectors/pagination.selectors';
import { paginationActions } from '../model/slice/pagination.actions';

@Component({
  selector: 'app-heroes-pagination',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './heroes-pagination.component.html',
  styleUrl: './heroes-pagination.component.scss'
})
export class HeroesPaginationComponent {
  @Output() onChangePagination: EventEmitter<any> = new EventEmitter()
  @Input() hasMore: Observable<boolean>

  constructor(private store: Store<StateSchema>) {}

  page: Observable<number> = this.store.select(selectHeroesPaginationPage)
  limit: Observable<number> = this.store.select(selectHeroesPaginationLimit)

  setPage = (page: number) => {
    this.store.dispatch(paginationActions.setPage({ page }))
    this.onChangePagination.emit()
  }
  setPreviousPage = () => {
    this.store.dispatch(paginationActions.setPreviousPage())
    this.onChangePagination.emit()
  }
  setNextPage = () => {
    this.store.dispatch(paginationActions.setNextPage())
    this.onChangePagination.emit()
  }
}
