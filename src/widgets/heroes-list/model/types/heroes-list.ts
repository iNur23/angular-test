import { Hero } from "entities/hero";

export interface HeroesListSchema {
    data: Hero[];
    page: number;
    limit: number;
    search: string;
    isLoading: boolean;
    error?: string
}