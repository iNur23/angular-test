import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../../model/types/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }

  getById(id: string) {
    return this.http.get<Hero>(`http://localhost:8000/heroes/${id}`)
  }
}
