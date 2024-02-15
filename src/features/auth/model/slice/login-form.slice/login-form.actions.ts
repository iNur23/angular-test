import { createAction, props } from '@ngrx/store';
import { AuthType } from '../../types/login-form';

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

const setName = createAction(
    '[LoginForm] Set Name',
    props<{ name: string }>()
);


const setSurname = createAction(
    '[LoginForm] Set Surname',
    props<{ surname: string }>()
);


const setAvatar = createAction(
    '[LoginForm] Set Avatar',
    props<{ avatar: string }>()
);

const clearForm = createAction('[LoginForm] Clear Form');

export const loginFormActions = { setType, setUsername, setPassword, setName, setSurname, setAvatar, clearForm }