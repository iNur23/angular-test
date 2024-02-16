import { ActionReducerMap } from "@ngrx/store";
import { heroEffects, HeroSchema, heroReducer } from "entities/hero";
import { AuthSchema, LoginFormSchema, authEffects, authReducer, loginFormReducer } from "features/auth";
import { SearchSchema, searchReducer } from "features/search-hero";
import { HeroesListSchema, heroesListEffects, heroesListReducer } from "widgets/heroes-list";

export interface StateSchema {
    hero: HeroSchema;
    heroesList: HeroesListSchema;
    loginForm: LoginFormSchema;
    auth: AuthSchema;
    search: SearchSchema;
}

export const appReducers: ActionReducerMap<StateSchema> = {
    hero: heroReducer,
    heroesList: heroesListReducer,
    loginForm: loginFormReducer,
    auth: authReducer,
    search: searchReducer
}

export const appEffects = [
    heroEffects,
    heroesListEffects,
    authEffects
]