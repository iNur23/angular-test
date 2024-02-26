import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { StateSchema } from "app/store/store";
import { heroesActions } from "./heroes.actions";
import { HeroService } from "entities/hero";
import { selectHeroesPageOptions } from "../../selectors/heroes-page.selectors";

const loadHeroes = createEffect((actions$ = inject(Actions), heroesService = inject(HeroService), store = inject(Store<StateSchema>)) => {
    return actions$.pipe(
        ofType(heroesActions.loadHeroes),
        withLatestFrom(store.select(selectHeroesPageOptions)),
        mergeMap(([action, pageOptions]) => {
            return heroesService.getHeroes(pageOptions).pipe(
                map(heroesList => heroesActions.loadHeroesSuccess({heroes: heroesList})),
                catchError((error) => {
                    if (error?.status === 0) return of(heroesActions.loadHeroesError({ error: 'Server is not responding' }))
                    return of(heroesActions.loadHeroesError({ error: error.statusText }))
                })
            )
        })
    )
}, { functional: true })

export const heroesEffects = { loadHeroes }
