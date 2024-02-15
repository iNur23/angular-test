import { createReducer, on } from "@ngrx/store";
import { loginFormActions } from "./login-form.actions";
import { LoginFormSchema } from "../../types/login-form";

const initialState: LoginFormSchema = {
    authType: "signIn",
    username: "",
    password: "",
    avatar: "",
    name: "",
    surname: ""
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
    on(loginFormActions.setName, (state, action) => ({
        ...state,
        name: action.name
    })),
    on(loginFormActions.setSurname, (state, action) => ({
        ...state,
        surname: action.surname
    })),
    on(loginFormActions.setAvatar, (state, action) => ({
        ...state,
        avatar: action.avatar
    })),
    on(loginFormActions.clearForm, () => initialState)
)