import * as fromReducer from "./search.reducer"
import { searchActions } from "./search.actions"
import { SearchSchema } from "../types/search"
import { Action } from "@ngrx/store"

const testState: SearchSchema = { query: 'Test query' }

describe('Search reducer', () => {
    const { searchReducer, initialState } = fromReducer

    describe('unknown action', () => {
        it('should return unchanged state', () => {
            const action: Action = {
                type: 'Unknown'
            }
            const state = searchReducer(testState, action)

            expect(state).toBe(testState)
        })
    })

    describe('set search action', () => {
        it('should return state with new query', () => {
            const action = searchActions.setSearch({ query: 'Other query' })
            const state = searchReducer(initialState, action)
            
            expect(state).toEqual({ ...initialState, query: 'Other query' })
        })
    })

    describe('clear search action', () => {
        it('should return default state', () => {
            const action = searchActions.clear
            const state = searchReducer(testState, action)
            
            expect(state).toEqual(initialState)
        })
    })
})