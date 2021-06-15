import { SettingsState } from './settings';
import { AuthState } from '@state/auth';

export interface State {
  settings: SettingsState;
  auth: AuthState;
}
