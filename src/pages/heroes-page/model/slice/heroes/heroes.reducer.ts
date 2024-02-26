import { createReducer, on } from "@ngrx/store";
import { HeroesSchema } from "../../types/heroes-page";
import { heroesActions } from "./heroes.actions";

export const initialState: HeroesSchema = {
    isLoading: false,
    data: []
}

export const heroesReducer = createReducer(
    initialState,
    on(heroesActions.loadHeroes, (state) => ({
        ...state,
        data: [],
        isLoading: true,
        error: undefined
    })),
    on(heroesActions.loadHeroesSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.heroes,
        error: undefined
    })),
    on(heroesActions.loadHeroesError, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)