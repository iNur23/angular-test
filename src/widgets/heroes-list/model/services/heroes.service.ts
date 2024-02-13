import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Hero } from 'entities/hero';

interface HeroesLoadingParams {
  search: string;
  page: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Hero[]>('http://localhost:8000/heroes')
  }
  
  getWithParams(params: HeroesLoadingParams) {
    const { page, limit, search } = params
    return this.http.get<Hero[]>(`http://localhost:8000/heroes`, {
      params: {
        _page: page,
        _limit: limit,
        q: search
      }
    })
  }
}
