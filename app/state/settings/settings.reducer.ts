import { createReducer, Action, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';

export interface SettingsState {
  sidenavOpen: boolean;
}

export const initialState: SettingsState = {
  sidenavOpen: true
};

const reducer = createReducer(
  initialState,
  on(SettingsActions.openSidenav, state => ({ ...state, sidenavOpen: true })),
  on(SettingsActions.closeSidenav, state => ({ ...state, sidenavOpen: false })),
  on(SettingsActions.toggleSidenav, state => ({ ...state, sidenavOpen: !state.sidenavOpen })),
);

export function settingsReducer(state: SettingsState | undefined, action: Action): SettingsState {
  return reducer(state, action);
}

