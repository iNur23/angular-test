import { createReducer, on } from "@ngrx/store";
import { PaginationSchema } from "../types/pagination";
import { paginationActions } from "./pagination.actions";

export const initialState: PaginationSchema = {
    page: 1,
    limit: 12
}

export const paginationReducer = createReducer(
    initialState,
    on(paginationActions.setPage, (state, action) => ({
        ...state,
        page: action.page
    })),
    on(paginationActions.setPreviousPage, (state) => ({
        ...state,
        page: state.page - 1
    })),
    on(paginationActions.setNextPage, (state) => ({
        ...state,
        page: state.page + 1
    })),
    on(paginationActions.setLimit, (state, action) => ({
        ...state,
        limit: action.limit,
        page: 1
    }))
)