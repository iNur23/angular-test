import { StateSchema } from "app/store/store"
import { createSelector } from '@ngrx/store';

export const selectHeroesList = (state: StateSchema) => state?.heroesList;

export const selectHeroesListData = createSelector(
    selectHeroesList,
    (state) => state?.data || []
);
export const selectHeroesListIsLoading = createSelector(
    selectHeroesList,
    (state) => state?.isLoading || false
);
export const selectHeroesListError = createSelector(
    selectHeroesList,
    (state) => state?.error
);
export const selectHeroesListPage = createSelector(
    selectHeroesList,
    (state) => state?.page || 1
);
export const selectHeroesListLimit = createSelector(
    selectHeroesList,
    (state) => state?.limit || 12
);
export const selectHeroesListSearch = createSelector(
    selectHeroesList,
    (state) => state?.search || ''
);
export const selectHeroesListPageOptions = createSelector(
    selectHeroesList,
    (state) => ({
        search: state?.search || '',
        page: state?.page || 1,
        limit: state?.limit || 12
    })
);
export const selectHeroesListHasMore = createSelector(
    selectHeroesList,
    (state) => {
        if (!state) return false
        const { data, limit } = state
        if (data?.length < limit) return false
        else return true
    }
);