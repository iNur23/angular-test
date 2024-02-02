import { Component } from '@angular/core';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    HeroesListComponent
  ],
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
