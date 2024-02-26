import { createSelector } from '@ngrx/store';
import { StateSchema } from 'app/store/store';
import { selectHeroesPagination, selectHeroesPaginationLimit } from "features/heroes-pagination";

export const selectHeroes = (state: StateSchema) => state?.heroesPage?.heroes;
export const selectSearch = (state: StateSchema) => state?.heroesPage?.search;

export const selectHeroesIsLoading = createSelector(
    selectHeroes,
    (state) => state?.isLoading || false
);

export const selectHeroesError = createSelector(
    selectHeroes,
    (state) => state?.error
);

export const selectHeroesData = createSelector(
    selectHeroes,
    state => state?.data || []
)

export const selectHeroesHasMore = createSelector(
    selectHeroesData,
    selectHeroesPaginationLimit,
    (data, limit) => {
        if (!data || !limit) return false
        if (data?.length < limit) return false
        else return true
    }
);

export const selectHeroesPageOptions = createSelector(
    selectHeroesPagination,
    selectSearch,
    (pagination, search) => ({ ...pagination, search: search.query })
)