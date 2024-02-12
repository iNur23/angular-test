import { ActionReducerMap } from "@ngrx/store";
import { heroEffects, HeroSchema, heroReducer } from "entities/hero";
import { HeroesListSchema, heroesListEffects, heroesListReducer } from "widgets/heroes-list";

export interface StateSchema {
    hero: HeroSchema;
    heroesList: HeroesListSchema
}

export const appReducers: ActionReducerMap<StateSchema> = {
    hero: heroReducer,
    heroesList: heroesListReducer
}

export const appEffects = [
    heroEffects,
    heroesListEffects
]