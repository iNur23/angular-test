import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../model/services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  search = new BehaviorSubject<string>("")

  constructor(private searchService: SearchService) {}

  onChangeSearch(e: EventTarget | null) {
    if (!e) return
    this.search.next((e as HTMLInputElement).value)
  }

  onClickButton() {
    this.searchService.setSearch(this.search.getValue())
  }
}
