import { Action } from "@ngrx/store"
import * as fromReducer from "./auth.reducer"
import { AuthSchema, UserData } from "../../types/auth"
import { USERDATA_LOCALSTORAGE_KEY } from "shared/const/localStorage"
import { authActions } from "./auth.actions"

const testUserData: UserData = { username: 'Test Name' }
const loadingState: AuthSchema = { isLoading: true, error: undefined }

describe('Auth reducer', () => {
    const { authReducer, initialState } = fromReducer

    describe('unknown action', () => {
        it('should return unchanged state', () => {
            const action: Action = {
                type: 'Unknown'
            }
            const state = authReducer(initialState, action)

            expect(state).toBe(initialState)
        })
    })

    describe('init auth action', () => {
        it('should return inited state', () => {
            localStorage.setItem(USERDATA_LOCALSTORAGE_KEY, JSON.stringify(testUserData))
            const action = authActions.init
            const state = authReducer(initialState, action)

            expect(state).toEqual({...initialState, userData: testUserData})
            localStorage.clear()
        })
    })

    describe('log in action', () => {
        it('should return loading state', () => {
            const action = authActions.logIn
            const state = authReducer(initialState, action)
            
            expect(state).toEqual(loadingState)
        })
    })

    describe('log in success action', () => {
        it('should return new state', () => {
            const action = authActions.logInSuccess({ userData: testUserData })
            const state = authReducer(loadingState, action)
            
            expect(state).toEqual({ ...initialState, userData: testUserData, error: undefined })
        })
    })

    describe('log in error action', () => {
        it('should return error state', () => {
            const action = authActions.logInError({ error: 'Test Error' })
            const state = authReducer(loadingState, action)
            
            expect(state).toEqual({ ...initialState, isLoading: false, error: 'Test Error' })
        })
    })

    describe('clear error', () => {
        it('should return state without error', () => {
            const action = authActions.clearError
            const state = authReducer(
                { isLoading: false, userData: testUserData, error: 'Test Error' },
                action
            )
            
            expect(state).toEqual({ isLoading: false, userData: testUserData, error: undefined })
        })
    })

    describe('set auth section', () => {
        it('should return new state', () => {
            localStorage.setItem(USERDATA_LOCALSTORAGE_KEY, JSON.stringify(testUserData))
            const action = authActions.logOut()
            const state = authReducer(
                { isLoading: false, userData: testUserData, error: 'Test Error' },
                action
            )
            
            expect(state).toEqual(initialState)
            expect(localStorage.getItem(USERDATA_LOCALSTORAGE_KEY)).toBeNull()
            localStorage.clear()
        })
    })
})