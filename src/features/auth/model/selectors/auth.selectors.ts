import { StateSchema } from "app/store/store"
import { createSelector } from '@ngrx/store';

export const selectAuth = (state: StateSchema) => state?.auth;

export const selectUserData = createSelector(
    selectAuth,
    (state) => state?.userData
);

export const selectIsAuthorized = createSelector(
    selectAuth,
    (state) => {
        if (state?.userData) return true
        else return false
    }
);

export const selectAuthIsLoading = createSelector(
    selectAuth,
    (state) => state?.isLoading || false
);

export const selectAuthError = createSelector(
    selectAuth,
    (state) => state?.error
);