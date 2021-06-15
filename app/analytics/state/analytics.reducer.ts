import { Action, createReducer, on } from '@ngrx/store';
import { AnalyticsApiActions, AnalyticsActions } from './actions';

export interface AnalyticsState {
  loading: boolean;
  error: string | null;
}

export const initialState: AnalyticsState = {
  loading: false,
  error: null
};

const analyticsReducer = createReducer(
  initialState,
  on(AnalyticsActions.load, state => ({...state, loading: true }))
);

export function reducer(state: AnalyticsState | undefined, action: Action): AnalyticsState {
  return analyticsReducer(state, action);
}
