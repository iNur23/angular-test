import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { StateSchema } from "app/store/store";
import { AuthService } from "../../services/auth.service";
import { selectLoginForm } from "../../selectors/login-form.selectors";
import { authActions } from "./auth.actions";

const authByUsername = createEffect((actions$ = inject(Actions), authService = inject(AuthService), store = inject(Store<StateSchema>)) => {
    return actions$.pipe(
        ofType(authActions.logIn),
        withLatestFrom(store.select(selectLoginForm)),
        mergeMap(([action, loginOptions]) => {
            const { authType, username, password } = loginOptions

            if (authType === "signIn") {
                return authService.signIn({ username, password }).pipe(
                    map(userData => authActions.logInSuccess({username: userData.username})),
                    catchError((error) => of(authActions.logInError({ error: error.message })))
                )
            }

            return authService.signUp({ username, password }).pipe(
                map(userData => authActions.logInSuccess({username: userData.username})),
                catchError((error) => of(authActions.logInError({ error: error.message })))
            )
        })
    )
}, { functional: true })

export const authEffects = { authByUsername }
