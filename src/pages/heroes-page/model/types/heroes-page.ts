import { Hero } from "entities/hero";
import { PaginationSchema } from "features/heroes-pagination";
import { SearchSchema } from "features/search-hero";

export interface HeroesSchema {
    data: Hero[];
    isLoading: boolean;
    error?: string
}

export interface HeroesPageSchema {
    pagination: PaginationSchema;
    heroes: HeroesSchema;
    search: SearchSchema;
}