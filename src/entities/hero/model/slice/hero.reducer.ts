import { createReducer, on } from "@ngrx/store";
import { HeroSchema } from "../types/hero";
import { heroActions } from "./hero.actions";

export const initialState: HeroSchema = {
    isLoading: false,
    selectedSection: "biography"
}

export const heroReducer = createReducer(
    initialState,
    on(heroActions.loadHero, (state) => ({
        ...state,
        data: undefined,
        isLoading: true,
        error: undefined
    })),
    on(heroActions.loadHeroSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.hero,
        error: undefined
    })),
    on(heroActions.loadHeroError, (state, action) => ({
        ...state,
        data: undefined,
        isLoading: false,
        error: action.error
    })),
    on(heroActions.setHeroSection, (state, action) => ({
        ...state,
        isLoading: false,
        selectedSection: action.section
    })),
    on(heroActions.clearHero, () => initialState)
)