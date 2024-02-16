import { createAction, props } from '@ngrx/store';
import { UserData } from '../../types/auth';

const init = createAction('[Auth] Init');

const logIn = createAction('[Auth] Log In');
const logInSuccess = createAction(
    '[Auth] Log In Success',
    props<UserData>()
);
const logInError = createAction(
    '[Auth] Log In Error',
    props<{ error: string; }>()
);

const clearError = createAction('[Auth] Clear Error');

const logOut = createAction('[Auth] Log Out');

export const authActions = { init, logIn, logInSuccess, logInError, logOut, clearError }