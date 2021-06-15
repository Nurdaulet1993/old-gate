import { ActionReducerMap, createSelector } from '@ngrx/store';
import { State } from './app.state';
import { settingsReducer } from './settings';
import { authReducer, AuthState } from '@state/auth';

export * from './app.state';

export const reducers: ActionReducerMap<State> = {
  settings: settingsReducer,
  auth: authReducer
};

export const selectSettings = (state: State) => state.settings;

export const selectSidenavOpen = createSelector(
  selectSettings,
  state => state.sidenavOpen
);

export const selectAuth = (state: State) => state.auth;

export const selectUser = createSelector(
  selectAuth,
  (state: AuthState) => state.user
);

export const selectRoles = createSelector(
  selectUser,
  user => user?.rolesList
);
