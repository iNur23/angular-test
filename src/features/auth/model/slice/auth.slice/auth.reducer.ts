import { createReducer, on } from "@ngrx/store";
import { authActions } from "./auth.actions";
import { AuthSchema } from "../../types/auth";
import { USERDATA_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const initialState: AuthSchema = {
    isLoading: false
}

export const authReducer = createReducer(
    initialState,
    on(authActions.init, (state, action) => {
        const fromLocalStorage = localStorage.getItem(USERDATA_LOCALSTORAGE_KEY)
        if (!fromLocalStorage) return initialState

        const userData = JSON.parse(fromLocalStorage)
        return {
            ...state,
            userData
        }
    }),
    on(authActions.logIn, (state, action) => ({
        ...state,
        isLoading: true
    })),
    on(authActions.logInSuccess, (state, action) => {
        localStorage.setItem(USERDATA_LOCALSTORAGE_KEY, JSON.stringify(action))
        return {
            ...state,
            error: undefined,
            isLoading: false,
            userData: action
        }
    }),
    on(authActions.logInError, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),
    on(authActions.logOut, () => {
        localStorage.removeItem(USERDATA_LOCALSTORAGE_KEY)
        return initialState
    }),
)