import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../../model/types/hero';

interface HeroesParams {
  search: string;
  page: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }

  getById(id: string) {
    return this.http.get<Hero>(`http://localhost:8000/heroes/${id}`)
  }
  
  getHeroes(params: HeroesParams) {
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
