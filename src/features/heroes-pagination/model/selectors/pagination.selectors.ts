import { createSelector } from "@ngrx/store";
import { StateSchema } from "app/store/store";

export const selectHeroesPagination = (state: StateSchema) => state?.heroesPage?.pagination || { page: 1, limit: 12 };

export const selectHeroesPaginationPage = createSelector(
    selectHeroesPagination,
    (state) => state?.page || 1
);
export const selectHeroesPaginationLimit = createSelector(
    selectHeroesPagination,
    (state) => state?.limit || 12
);