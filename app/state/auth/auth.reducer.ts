import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions, AuthApiActions } from './actions';
import { User } from '@shared/index';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
};

const reducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({...state, loading: true })),
  on(AuthApiActions.loginSuccess, (state, { user }) => ({...state, user, loading: false })),
  on(AuthApiActions.loginFailed, (state, { error }) => ({ ...state, error, loading: false }))
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return reducer(state, action);
}
