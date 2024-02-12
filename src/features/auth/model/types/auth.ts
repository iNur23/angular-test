export interface AuthSchema {
    userData?: {
        username: string;
    };
    isLoading: boolean;
    error?: string
}