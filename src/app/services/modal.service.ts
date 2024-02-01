import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpened$ = new BehaviorSubject<boolean>(false)

  constructor() { }

  onContentClick(e: MouseEvent) {
    e.stopPropagation()
  }

  open = () => {
    this.isOpened$.next(true)
  }

  close = () => {
    this.isOpened$.next(false)
  }
}
