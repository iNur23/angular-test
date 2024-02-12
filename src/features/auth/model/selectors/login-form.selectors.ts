import { StateSchema } from "app/store/store"
import { createSelector } from '@ngrx/store';

export const selectLoginForm = (state: StateSchema) => state.loginForm;

export const selectLoginFormAuthType = createSelector(
    selectLoginForm,
    (state) => state.authType
);

export const selectLoginFormUsername = createSelector(
    selectLoginForm,
    (state) => state.username
);

export const selectLoginFormPassword = createSelector(
    selectLoginForm,
    (state) => state.password
);

export const selectLoginFormError = createSelector(
    selectLoginForm,
    (state) => state.error
);