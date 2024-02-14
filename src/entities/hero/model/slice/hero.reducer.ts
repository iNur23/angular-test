import { createReducer, on } from "@ngrx/store";
import { HeroSchema } from "../types/hero";
import { heroActions } from "./hero.actions";

const initialState: HeroSchema = {
    isLoading: false,
    selectedSection: "biography"
}

export const heroReducer = createReducer(
    initialState,
    on(heroActions.loadHero, (state) => ({
        ...state,
        isLoading: true,
        error: undefined
    })),
    on(heroActions.loadHeroSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        data: action,
        error: undefined
    })),
    on(heroActions.loadHeroError, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),
    on(heroActions.setHeroSection, (state, action) => ({
        ...state,
        isLoading: false,
        selectedSection: action.section
    }))
)