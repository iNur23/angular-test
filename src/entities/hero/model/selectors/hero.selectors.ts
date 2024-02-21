import { StateSchema } from "app/store/store"
import { createSelector } from '@ngrx/store';

export const selectHero = (state: StateSchema) => state?.hero;

export const selectHeroData = createSelector(
    selectHero,
    (state) => state?.data
);

export const selectHeroError = createSelector(
    selectHero,
    (state) => state?.error
);

export const selectHeroIsLoading = createSelector(
    selectHero,
    (state) => state?.isLoading || false
);

export const selectHeroSection = createSelector(
    selectHero,
    (state) => state?.selectedSection
);