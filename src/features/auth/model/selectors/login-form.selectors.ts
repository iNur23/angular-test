import { StateSchema } from "app/store/store"
import { createSelector } from '@ngrx/store';

export const selectLoginForm = (state: StateSchema) => state.loginForm;

export const selectAuthType = createSelector(
    selectLoginForm,
    (state) => state.authType
);

export const selectLoginFormUsername = createSelector(
    selectLoginForm,
    (state) => state.username || ''
);

export const selectLoginFormPassword = createSelector(
    selectLoginForm,
    (state) => state.password || ''
);

export const selectLoginFormErrors = createSelector(
    selectLoginForm,
    (state) => state.error || {}
);

export const selectLoginFormAvatar = createSelector(
    selectLoginForm,
    (state) => state.avatar || ''
);

export const selectLoginFormName = createSelector(
    selectLoginForm,
    (state) => state.name || ''
);

export const selectLoginFormSurname = createSelector(
    selectLoginForm,
    (state) => state.surname || ''
);