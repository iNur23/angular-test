import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { catchError, exhaustMap, map, mergeMap, of, withLatestFrom } from "rxjs";
import { heroesListActions } from "./heroes-list.actions";
import { HeroesService } from "../services/heroes.service";
import { Store } from "@ngrx/store";
import { StateSchema } from "app/store/store";
import { selectHeroesListPageOptions } from "../selectors/heroes-list.selectors";

const loadHero = createEffect((actions$ = inject(Actions), heroesService = inject(HeroesService), store = inject(Store<StateSchema>)) => {
    return actions$.pipe(
        ofType(heroesListActions.loadHeroesList),
        withLatestFrom(store.select(selectHeroesListPageOptions)),
        mergeMap(([action, pageOptions]) => {
            return heroesService.getWithParams(pageOptions).pipe(
                map(heroesList => heroesListActions.loadHeroesListSuccess({heroes: heroesList})),
                catchError((error) => {
                    if (error?.status === 0) return of(heroesListActions.loadHeroesListError({ error: 'Server is not responding' }))
                    return of(heroesListActions.loadHeroesListError({ error: error.statusText }))
                })
            )
        })
    )
}, { functional: true })

export const heroesListEffects = { loadHero }
