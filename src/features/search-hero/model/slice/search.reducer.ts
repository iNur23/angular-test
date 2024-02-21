import { createReducer, on } from "@ngrx/store";
import { searchActions } from "./search.actions";
import { SearchSchema } from "../types/search";

export const initialState: SearchSchema = {
    query: ""
}

export const searchReducer = createReducer(
    initialState,
    on(searchActions.setSearch, (state, action) => ({
        ...state,
        query: action.query
    })),
    on(searchActions.clear, () => initialState)
)