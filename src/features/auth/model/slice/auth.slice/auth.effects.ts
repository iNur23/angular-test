import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { StateSchema } from "app/store/store";
import { AuthService } from "../../services/auth.service";
import { selectLoginForm } from "../../selectors/login-form.selectors";
import { authActions } from "./auth.actions";
import { Router } from "@angular/router";

const authByUsername = createEffect((
    actions$ = inject(Actions),
    authService = inject(AuthService),
    store = inject(Store<StateSchema>),
    router = inject(Router)
) => {
    return actions$.pipe(
        ofType(authActions.logIn),
        withLatestFrom(store.select(selectLoginForm)),
        mergeMap(([action, loginOptions]) => {
            const { authType, ...authData } = loginOptions

            if (authType === "signIn") {
                return authService.signIn(authData).pipe(
                    map(userData => {
                        router.navigate(['/heroes'])
                        return authActions.logInSuccess(userData)
                    }),
                    catchError((error) => of(authActions.logInError({ error: error.statusText })))
                )
            }

            return authService.signUp(authData).pipe(
                map(userData => {
                    router.navigate(['/heroes'])
                    return authActions.logInSuccess(userData)
                }),
                catchError((error) => of(authActions.logInError({ error: error.statusText })))
            )
        })
    )
}, { functional: true })

export const authEffects = { authByUsername }
