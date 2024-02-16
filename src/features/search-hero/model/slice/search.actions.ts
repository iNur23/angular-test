import { createAction, props } from '@ngrx/store';

const setSearch = createAction(
    '[Search] Set Search',
    props<{ query: string; }>()
);

const clear = createAction(
    '[Search] Clear'
);

export const searchActions = { setSearch, clear }