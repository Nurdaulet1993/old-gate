import { createAction, props } from '@ngrx/store';
import { User } from '@shared/index';

export enum AuthActionsTypes {
  LOGIN = '[AUTH] Login',
  LOGIN_AUTO = '[AUTH] Login auto',
  LOGOUT = '[AUTH] Logout'
}

export const login = createAction(
  AuthActionsTypes.LOGIN, props<{ username: string; password: string }>()
);

export const logout = createAction(AuthActionsTypes.LOGOUT);
export const loginAouto = createAction(AuthActionsTypes.LOGIN_AUTO);
