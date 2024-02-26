import { createAction, props } from '@ngrx/store';
import { Hero } from 'entities/hero';

const loadHeroes = createAction('[Heroes] Load Heroes');

const loadHeroesSuccess = createAction(
    '[Heroes] Load Heroes Success',
    props<{ heroes: Hero[] }>()
);

const loadHeroesError = createAction(
    '[Heroes] Load Heroes Error',
    props<{ error: string }>()
);

export const heroesActions = {
    loadHeroes,
    loadHeroesSuccess,
    loadHeroesError
}