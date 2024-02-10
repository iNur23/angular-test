import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private search = new BehaviorSubject<string>('')
  getSearch = this.search.asObservable()

  constructor() { }

  setSearch(search: string) {
    this.search.next(search)
  }
}
