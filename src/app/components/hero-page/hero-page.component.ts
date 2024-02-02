import { Component, Input, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { someHero } from '../../data/heroes';
import { CommonModule } from '@angular/common';

interface Hero {
  response: string;
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  image: {
    url: string
  };
}

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent implements OnInit {
  @Input() id: string
  hero: Hero = someHero

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    // this.heroesService.getById(this.id).subscribe(hero => {
    //   this.hero = hero
    // }) 
  }
}
