import { createReducer, on } from "@ngrx/store";
import { HeroSchema } from "../types/hero";
import { heroActions } from "./hero.actions";

const initialState: HeroSchema = {
    isLoading: false
}

export const heroReducer = createReducer(
    initialState,
    on(heroActions.loadHero, (state) => ({
        isLoading: true,
        error: undefined
    })),
    on(heroActions.loadHeroSuccess, (state, data) => ({
        isLoading: false,
        data,
        error: undefined
    })),
    on(heroActions.loadHeroError, (state, data) => ({
        isLoading: false,
        error: data.error
    }))
)