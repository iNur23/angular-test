import { Action } from "@ngrx/store"
import * as fromReducer from "./heroes-list.reducer"
import { heroesListActions } from "./heroes-list.actions"
import { HeroesListSchema } from "../types/heroes-list"
import { Hero } from "entities/hero"

const testState: HeroesListSchema = { 
    data: [ { name: 'FirstHero' }, { name: 'SecondHero' }, { name: 'ThirdHero' } ] as Hero[],
    isLoading: false,
    page: 4,
    limit: 15,
    search: 'Test query'
}

const loadingState: HeroesListSchema = {
    data: [],
    isLoading: true,
    error: undefined,
    page: 4,
    limit: 15,
    search: 'Test query'
}

const testHeroes: Hero[] = [ { name: 'OtherHero1' }, { name: 'OtherHero2' }, { name: 'OtherHero3' } ] as Hero[];

describe('Heroes list reducer', () => {
    const { heroesListReducer } = fromReducer

    describe('unknown action', () => {
        it('should return unchanged state', () => {
            const action: Action = {
                type: 'Unknown'
            }
            const state = heroesListReducer(testState, action)

            expect(state).toBe(testState)
        })
    })

    describe('load heroes action', () => {
        it('should return new state', () => {
            const action = heroesListActions.loadHeroesList
            const state = heroesListReducer(testState, action)
            
            expect(state).toEqual(loadingState)
        })
    })

    describe('load heroes success action', () => {
        it('should return new state', () => {
            const action = heroesListActions.loadHeroesListSuccess({ heroes: testHeroes })
            const state = heroesListReducer(loadingState, action)
            
            expect(state).toEqual({ ...testState, data: testHeroes, error: undefined })
        })
    })

    describe('load heroes error action', () => {
        it('should return error state', () => {
            const action = heroesListActions.loadHeroesListError({ error: 'Some error' })
            const state = heroesListReducer(loadingState, action)
            
            expect(state).toEqual({ ...testState, data: [], error: 'Some error' })
        })
    })

    describe('set search action', () => {
        it('should return state with new search and page resetting', () => {
            const action = heroesListActions.setSearch({ search: 'Other query' })
            const state = heroesListReducer(testState, action)
            
            expect(state).toEqual({ ...testState, search: 'Other query', page: 1 })
        })
    })

    describe('set page action', () => {
        it('should return state with new page', () => {
            const action = heroesListActions.setPage({ page: 5 })
            const state = heroesListReducer(testState, action)
            
            expect(state).toEqual({ ...testState, page: 5 })
        })
    })

    describe('set previous page action', () => {
        it('should return state with decremented page', () => {
            const action = heroesListActions.setPreviousPage
            const state = heroesListReducer(testState, action)
            
            expect(state).toEqual({ ...testState, page: 3 })
        })
    })

    describe('set next page action', () => {
        it('should return state with incremented page', () => {
            const action = heroesListActions.setNextPage
            const state = heroesListReducer(testState, action)
            
            expect(state).toEqual({ ...testState, page: 5 })
        })
    })

    describe('set limit action', () => {
        it('should return state with new limit and page resetting', () => {
            const action = heroesListActions.setLimit({ limit: 20 })
            const state = heroesListReducer(testState, action)
            
            expect(state).toEqual({ ...testState, limit: 20, page: 1 })
        })
    })
})
