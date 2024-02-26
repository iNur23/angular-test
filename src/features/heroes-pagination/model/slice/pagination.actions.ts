import { createAction, props } from '@ngrx/store';

const setPage = createAction(
    '[Pagination] Set Page',
    props<{ page: number }>()
);

const setPreviousPage = createAction('[Pagination] Set Previous Page');

const setNextPage = createAction('[Pagination] Set Next Page');

const setLimit = createAction(
    '[Pagination] Set Limit',
    props<{ limit: number }>()
);

export const paginationActions = {
    setPage,
    setLimit,
    setPreviousPage,
    setNextPage
}