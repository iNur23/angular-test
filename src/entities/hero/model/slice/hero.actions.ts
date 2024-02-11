import { createAction, props } from '@ngrx/store';
import { Hero } from '../types/hero';

const loadHero = createAction(
  '[Hero] Load Hero',
  props<{ id: string }>()
);

const loadHeroSuccess = createAction(
  '[Hero] Load Hero Success',
  props<Hero>()
);

const loadHeroError = createAction(
  '[Hero] Load Hero Error',
  props<{ error: string }>()
);

export const heroActions = { loadHero, loadHeroSuccess, loadHeroError }