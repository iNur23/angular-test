import { createReducer, on } from "@ngrx/store";
import { HeroesListSchema } from "../types/heroes-list";
import { heroesListActions } from "./heroes-list.actions";

export const initialState: HeroesListSchema = {
    page: 1,
    limit: 12,
    search: "",
    isLoading: false,
    data: []
}

export const heroesListReducer = createReducer(
    initialState,
    on(heroesListActions.loadHeroesList, (state) => ({
        ...state,
        data: [],
        isLoading: true,
        error: undefined
    })),
    on(heroesListActions.loadHeroesListSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.heroes,
        error: undefined
    })),
    on(heroesListActions.loadHeroesListError, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),
    on(heroesListActions.setSearch, (state, action) => ({
        ...state,
        search: action.search,
        page: 1
    })),
    on(heroesListActions.setPage, (state, action) => ({
        ...state,
        page: action.page
    })),
    on(heroesListActions.setPreviousPage, (state) => ({
        ...state,
        page: state.page - 1
    })),
    on(heroesListActions.setNextPage, (state) => ({
        ...state,
        page: state.page + 1
    })),
    on(heroesListActions.setLimit, (state, action) => ({
        ...state,
        limit: action.limit,
        page: 1
    }))
)