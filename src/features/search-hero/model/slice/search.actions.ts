import { createAction, props } from '@ngrx/store';

const setQuery = createAction(
    '[Search] Set Query',
    props<{ query: string; }>()
);

export const searchActions = { setQuery }