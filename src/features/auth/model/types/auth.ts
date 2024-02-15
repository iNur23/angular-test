export interface AuthSchema {
    userData?: UserData;
    isLoading: boolean;
    error?: string
}

export interface AuthData {
    username: string;
    password: string;
    avatar?: string;
    name?: string;
    surname?: string;
}

export type UserData = Omit<AuthData, 'password'>