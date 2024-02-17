import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HeroService } from "../services/hero.service";
import { inject } from "@angular/core";
import { catchError, exhaustMap, map, of } from "rxjs";
import {heroActions} from "./hero.actions";

const loadHero = createEffect((actions$ = inject(Actions), heroService = inject(HeroService)) => {
    return actions$.pipe(
        ofType(heroActions.loadHero),
        exhaustMap(action => {
            return heroService.getById(action.id).pipe(
                map(hero => heroActions.loadHeroSuccess(hero)),
                catchError((error) => of(heroActions.loadHeroError({ error: error.statusText })))
            )
        })
    )
}, { functional: true })

export const heroEffects = { loadHero }
