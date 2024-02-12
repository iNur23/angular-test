import { createAction, props } from '@ngrx/store';
import { Hero } from 'entities/hero';

const loadHeroesList = createAction('[Heroes List] Load Heroes List');

const loadHeroesListSuccess = createAction(
    '[Heroes List] Load Heroes List Success',
    props<{ heroes: Hero[] }>()
);

const loadHeroesListError = createAction(
    '[Heroes List] Load Heroes List Error',
    props<{ error: string }>()
);

const setSearch = createAction(
    '[Heroes List] Set Heroes List Search',
    props<{ search: string }>()
);

const setPage = createAction(
    '[Heroes List] Set Heroes List Page',
    props<{ page: number }>()
);

const setPreviousPage = createAction('[Heroes List] Set Heroes List Previous Page');

const setNextPage = createAction('[Heroes List] Set Heroes List Next Page');

const setLimit = createAction(
    '[Heroes List] Set Heroes List Limit',
    props<{ limit: number }>()
);

export const heroesListActions = {
    loadHeroesList,
    loadHeroesListSuccess,
    loadHeroesListError,
    setSearch,
    setPage,
    setLimit,
    setPreviousPage,
    setNextPage
}