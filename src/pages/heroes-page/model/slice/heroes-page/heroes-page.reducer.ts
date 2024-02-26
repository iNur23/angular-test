import { combineReducers } from "@ngrx/store";
import * as fromHeroes from "../heroes/heroes.reducer";
import { paginationInitialState, paginationReducer } from "features/heroes-pagination";
import { searchInitialState, searchReducer } from "features/search-hero";

export const heroesPageReducer = combineReducers({
    heroes: fromHeroes.heroesReducer,
    pagination: paginationReducer,
    search: searchReducer
}, {
    heroes: fromHeroes.initialState,
    pagination: paginationInitialState,
    search: searchInitialState
})