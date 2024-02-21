import * as fromReducer from "./login-form.reducer"
import { loginFormActions } from "./login-form.actions"
import { LoginFormSchema } from "../../types/login-form"
import { Action } from "@ngrx/store"

const testState: LoginFormSchema = {
    authType: 'signUp',
    username: 'testDefaultUsr',
    password: 'testDefaultPwd',
    error: { username: 'someTestError' }
}

describe('Login form reducer', () => {
    const { loginFormReducer, initialState } = fromReducer

    describe('unknown action', () => {
        it('should return unchanged state', () => {
            const action: Action = {
                type: 'Unknown'
            }
            const state = loginFormReducer(testState, action)

            expect(state).toBe(testState)
        })
    })

    describe('set type action', () => {
        it('should return new state', () => {
            const action = loginFormActions.setType({ authType: 'signUp' })
            const state = loginFormReducer(testState, action)
            
            expect(state).toEqual({ ...testState, authType: 'signUp' })
        })
    })

    describe('set username action', () => {
        it('should return state with new username', () => {
            const action = loginFormActions.setUsername({ username: 'TestUsr' })
            const state = loginFormReducer(testState, action)
            
            expect(state).toEqual({ ...testState, username: 'TestUsr' })
        })
    })

    describe('set password action', () => {
        it('should return state with new password', () => {
            const action = loginFormActions.setPassword({ password: 'TestPwd' })
            const state = loginFormReducer(testState, action)
            
            expect(state).toEqual({ ...testState, password: 'TestPwd' })
        })
    })

    describe('set name action', () => {
        it('should return state with new name', () => {
            const action = loginFormActions.setName({ name: 'Test name' })
            const state = loginFormReducer(testState, action)
            
            expect(state).toEqual({ ...testState, name: 'Test name' })
        })
    })

    describe('set surname action', () => {
        it('should return state with new surname', () => {
            const action = loginFormActions.setSurname({ surname: 'Test surname' })
            const state = loginFormReducer(testState, action)
            
            expect(state).toEqual({ ...testState, surname: 'Test surname' })
        })
    })

    describe('set avatar action', () => {
        it('should return state with new avatar', () => {
            const action = loginFormActions.setAvatar({ avatar: 'www.testimageurl.com/123' })
            const state = loginFormReducer(testState, action)
            
            expect(state).toEqual({ ...testState, avatar: 'www.testimageurl.com/123' })
        })
    })

    describe('set errors action', () => {
        it('should return state with new errors', () => {
            const action = loginFormActions.setErrors({ errors: { username: 'required' } })
            const state = loginFormReducer(testState, action)
            
            expect(state).toEqual({ ...testState, error: { username: 'required' } })
        })
    })

    describe('clear form action', () => {
        it('should return initial state', () => {
            const action = loginFormActions.clearForm
            const state = loginFormReducer(
                testState,
                action
            )
            
            expect(state).toEqual(initialState)
        })
    })
})