import { ActionReducerMap } from "@ngrx/store";
import { heroEffects, HeroSchema, heroReducer } from "entities/hero";
import { AuthSchema, LoginFormSchema, authEffects, authReducer, loginFormReducer } from "features/auth";
import { HeroesPageSchema, heroesEffects, heroesPageReducer } from "pages/heroes-page";

export interface StateSchema {
    hero: HeroSchema;
    heroesPage: HeroesPageSchema
    loginForm: LoginFormSchema;
    auth: AuthSchema;
}

export const appReducers: ActionReducerMap<StateSchema> = {
    hero: heroReducer,
    heroesPage: heroesPageReducer, 
    loginForm: loginFormReducer,
    auth: authReducer
}

export const appEffects = [
    heroEffects,
    heroesEffects,
    authEffects
]