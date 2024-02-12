import { createReducer, on } from "@ngrx/store";
import { loginFormActions } from "./login-form.actions";
import { LoginFormSchema } from "../../types/loginForm";

const initialState: LoginFormSchema = {
    authType: "signIn",
    username: "",
    password: ""
}

export const loginFormReducer = createReducer(
    initialState,
    on(loginFormActions.setType, (state, action) => ({
        ...state,
        authType: action.authType
    })),
    on(loginFormActions.setUsername, (state, action) => ({
        ...state,
        username: action.username
    })),
    on(loginFormActions.setPassword, (state, action) => ({
        ...state,
        password: action.password
    })),
    on(loginFormActions.clearForm, () => initialState)
)