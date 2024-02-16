export {
    selectHeroesListLimit,
    selectHeroesListPage,
    selectHeroesListHasMore,
    selectHeroesListIsLoading,
    selectHeroesListError,
    selectHeroesListSearch,
    selectHeroesListData
} from "./model/selectors/heroes-list.selectors";

export { HeroesListSchema } from "./model/types/heroes-list";

export { heroesListActions } from "./model/slice/heroes-list.actions";
export { heroesListEffects } from "./model/slice/heroes-list.effects";
export { heroesListReducer } from "./model/slice/heroes-list.reducer";

export { HeroesListComponent } from "./ui/heroes-list.component";
