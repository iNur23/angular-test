import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Hero } from 'entities/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Hero[]>('http://localhost:8000/heroes')
  }
  
  getWithSearch(search: string, page: number, limit: number) {
    return this.http.get<Hero[]>(`http://localhost:8000/heroes`, {
      params: {
        _page: page,
        _per_page: limit,
        q: search
      }
    })
  }
}
