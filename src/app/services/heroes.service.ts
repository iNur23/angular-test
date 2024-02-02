import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { heroesList } from '../data/heroes';
import {API_KEY} from '../../resources/const/api'

export interface Hero {
  id: number;
  name: string;
  image: { url: string }
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor(private http: HttpClient) { }

  getAll() {
    return heroesList
  }

  getWithPagination(page: number, limit: number) {
    const heroes = heroesList.slice((page-1)*limit, page*limit)
    return heroes
  }

  getWithSearch(search: string, page: number, limit: number) {
    const heroes = heroesList
      .filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()))
      .slice((page-1)*limit, page*limit)
    return heroes
  }

  getById(id: string) {
    return this.http.get<Hero>(`localhost:4200/api/api/${API_KEY}/${id}`, {headers: {
      'Content-Type': 'application/json'
    }})
  }
}
