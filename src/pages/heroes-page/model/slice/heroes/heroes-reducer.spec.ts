import { Action } from "@ngrx/store"
import * as fromReducer from "./heroes.reducer"
import { Hero } from "entities/hero"
import { HeroesSchema } from "../../types/heroes-page"
import { heroesActions } from "./heroes.actions"

const testState: HeroesSchema = { 
    data: [ { name: 'FirstHero' }, { name: 'SecondHero' }, { name: 'ThirdHero' } ] as Hero[],
    isLoading: false
}

const loadingState: HeroesSchema = {
    data: [],
    isLoading: true,
    error: undefined
}

const testHeroes: Hero[] = [ { name: 'OtherHero1' }, { name: 'OtherHero2' }, { name: 'OtherHero3' } ] as Hero[];

describe('Heroes reducer', () => {
    const { heroesReducer } = fromReducer

    describe('unknown action', () => {
        it('should return unchanged state', () => {
            const action: Action = {
                type: 'Unknown'
            }
            const state = heroesReducer(testState, action)

            expect(state).toBe(testState)
        })
    })

    describe('load heroes action', () => {
        it('should return new state', () => {
            const action = heroesActions.loadHeroes
            const state = heroesReducer(testState, action)
            
            expect(state).toEqual(loadingState)
        })
    })

    describe('load heroes success action', () => {
        it('should return new state', () => {
            const action = heroesActions.loadHeroesSuccess({ heroes: testHeroes })
            const state = heroesReducer(loadingState, action)
            
            expect(state).toEqual({ ...testState, data: testHeroes, error: undefined })
        })
    })

    describe('load heroes error action', () => {
        it('should return error state', () => {
            const action = heroesActions.loadHeroesError({ error: 'Some error' })
            const state = heroesReducer(loadingState, action)
            
            expect(state).toEqual({ ...testState, data: [], error: 'Some error' })
        })
    })
})
