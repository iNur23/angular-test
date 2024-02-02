import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroCardComponent } from '../hero-card/hero-card.component';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [
    HeroCardComponent,
    CommonModule
  ],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent implements OnInit {
  heroes: {name: string, id: number}[]
  page = 1
  limit = 10
  search: string = ""

  constructor(private searchService: SearchService, private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.searchService.getSearch.subscribe(search => {
      this.setSearch(search)
    })
  }

  setPage(page: number) {
    this.page = page
    this.heroes = this.heroesService.getWithSearch(this.search, this.page, this.limit)
  }

  setLimit(limit: number) {
    this.limit = limit
    this.heroes = this.heroesService.getWithSearch(this.search, this.page, this.limit)
  }

  setSearch(search: string) {
    this.page = 1
    this.search = search
    this.heroes = this.heroesService.getWithSearch(search, this.page, this.limit)
  }
}
