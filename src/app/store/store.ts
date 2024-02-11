import { ActionReducerMap } from "@ngrx/store";
import { HeroSchema, heroReducer } from "entities/hero";

export interface StateSchema {
    hero: HeroSchema
}

export const reducers: ActionReducerMap<StateSchema> = {
    hero: heroReducer
}