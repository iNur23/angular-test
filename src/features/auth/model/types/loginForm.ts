export type AuthType = "signIn" | "signUp"

export interface LoginFormSchema {
    authType: AuthType;
    username: string;
    password: string;
    error?: string
}