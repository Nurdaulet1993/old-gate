import { createAction, props } from '@ngrx/store';
import { User } from '@shared/index';

export enum AuthApiActionsTypes {
  LOGIN_SUCCESS = '[AUTH API] Login succeed',
  LOGIN_FAILED = '[AUTH API] Login failed',
}


export const loginSuccess = createAction(
  AuthApiActionsTypes.LOGIN_SUCCESS, props<{ user: User }>()
);

export const loginFailed = createAction(
  AuthApiActionsTypes.LOGIN_FAILED,
  props<{ error: string }>()
);
