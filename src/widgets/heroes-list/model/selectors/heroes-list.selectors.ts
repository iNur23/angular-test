import { StateSchema } from "app/store/store"
import { createSelector } from '@ngrx/store';

export const selectHeroesList = (state: StateSchema) => state.heroesList;

export const selectHeroesListData = createSelector(
    selectHeroesList,
    (state) => state.data
);
export const selectHeroesListIsLoading = createSelector(
    selectHeroesList,
    (state) => state.isLoading
);
export const selectHeroesListError = createSelector(
    selectHeroesList,
    (state) => state.error
);
export const selectHeroesListPage = createSelector(
    selectHeroesList,
    (state) => state.page
);
export const selectHeroesListLimit = createSelector(
    selectHeroesList,
    (state) => state.limit
);
export const selectHeroesListSearch = createSelector(
    selectHeroesList,
    (state) => state.search
);
export const selectHeroesListPageOptions = createSelector(
    selectHeroesList,
    ({ search, page, limit }) => ({ search, page, limit })
);