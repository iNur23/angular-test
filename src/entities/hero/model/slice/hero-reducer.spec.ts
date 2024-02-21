import { Action } from "@ngrx/store"
import * as fromReducer from "./hero.reducer"
import { heroActions } from "./hero.actions"
import { Hero, HeroSchema } from "../types/hero"

const testHero = { name: 'Test Name' } as Hero
const testState: HeroSchema = {
    data: { name: 'Some Hero' } as Hero,
    isLoading: false,
    selectedSection: 'work',
}
const loadingState: HeroSchema = { selectedSection: 'work', data: undefined, isLoading: true, error: undefined }

describe('Hero reducer', () => {
    const { heroReducer, initialState } = fromReducer

    describe('unknown action', () => {
        it('should return unchanged state', () => {
            const action: Action = {
                type: 'Unknown'
            }
            const state = heroReducer(testState, action)

            expect(state).toBe(testState)
        })
    })

    describe('load hero action', () => {
        it('should return loading state', () => {
            const action = heroActions.loadHero
            const state = heroReducer(testState, action)

            expect(state).toEqual(loadingState)
        })
    })

    describe('load hero success action', () => {
        it('should return new state', () => {
            const action = heroActions.loadHeroSuccess({ hero: testHero })
            const state = heroReducer(loadingState, action)
            
            expect(state).toEqual({ ...testState, data: testHero, error: undefined })
        })
    })

    describe('load hero error action', () => {
        it('should return error state', () => {
            const action = heroActions.loadHeroError({ error: 'Test Error' })
            const state = heroReducer(loadingState, action)
            
            expect(state).toEqual({ ...testState, data: undefined, isLoading: false, error: 'Test Error' })
        })
    })

    describe('set hero section', () => {
        it('should return new state', () => {
            const action = heroActions.setHeroSection({ section: 'appearance' })
            const state = heroReducer(testState, action)
            
            expect(state).toEqual({ ...testState, selectedSection: 'appearance' })
        })
    })

    describe('clear hero', () => {
        it('should return default state', () => {
            const action = heroActions.clearHero
            const state = heroReducer(testState, action)
            
            expect(state).toEqual(initialState)
        })
    })
})