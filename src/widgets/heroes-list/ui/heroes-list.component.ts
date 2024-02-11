import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../model/services/heroes.service';
import { HeroCardComponent } from '../../../entities/hero/ui/hero-card/hero-card.component';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../../features/searchHero/model/services/search.service';
import { Hero } from 'entities/hero';

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
  heroes: Hero[]
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
    this.page = page;
    this.heroesService.getWithSearch(this.search, this.page, this.limit).subscribe(heroes => {
      this.heroes = heroes
    })
  }

  setLimit(limit: number) {
    this.limit = limit
    this.heroesService.getWithSearch(this.search, this.page, this.limit).subscribe(heroes => {
      this.heroes = heroes
    })
  }

  setSearch(search: string) {
    this.page = 1
    this.search = search
    this.heroesService.getWithSearch(this.search, this.page, this.limit).subscribe(heroes => {
      this.heroes = heroes
    })
  }
}
