import { createAction, props } from '@ngrx/store';

export enum SettingsActionsTypes {
  OPEN_SIDENAV = '[SETTINGS] Open Sidenav',
  CLOSE_SIDENAV = '[SETTINGS] Close Sidenav',
  TOGGLE_SIDENAV = '[SETTINGS] Toggle Sidenav'
}

export const toggleSidenav = createAction(SettingsActionsTypes.TOGGLE_SIDENAV);
export const openSidenav = createAction(SettingsActionsTypes.OPEN_SIDENAV);
export const closeSidenav = createAction(SettingsActionsTypes.CLOSE_SIDENAV);
