export type AuthType = "signIn" | "signUp"

export interface LoginFormSchema {
    authType: AuthType;
    username: string;
    password: string;
    error: LoginFormErrors;
    avatar?: string;
    name?: string;
    surname?: string
}

export interface LoginFormErrors {
    username?: string,
    password?: string
}