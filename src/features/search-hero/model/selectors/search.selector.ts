import { createSelector } from "@ngrx/store";
import { StateSchema } from "app/store/store"

const selectSearch = (state: StateSchema) => state?.heroesPage?.search;

export const selectSearchQuery = createSelector(
    selectSearch,
    (state) => state?.query || ''
)