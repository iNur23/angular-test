import { createAction, props } from '@ngrx/store';
import { AuthType } from '../../types/loginForm';

const setType = createAction(
    '[LoginForm] Set Type',
    props<{ authType: AuthType }>()
);

const setUsername = createAction(
    '[LoginForm] Set Username',
    props<{ username: string }>()
);

const setPassword = createAction(
    '[LoginForm] Set Password',
    props<{ password: string }>()
);

const clearForm = createAction('[LoginForm] Clear Form');

export const loginFormActions = { setType, setUsername, setPassword, clearForm }