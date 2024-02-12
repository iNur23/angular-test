import { createAction, props } from '@ngrx/store';

const init = createAction('[Auth] Init');

const logIn = createAction('[Auth] Log In');
const logInSuccess = createAction(
    '[Auth] Log In Success',
    props<{ username: string; }>()
);
const logInError = createAction(
    '[Auth] Log In Error',
    props<{ error: string; }>()
);

const logOut = createAction('[Auth] Log Out');

export const authActions = { init, logIn, logInSuccess, logInError, logOut }