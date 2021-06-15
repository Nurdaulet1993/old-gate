import { createSelector } from '@ngrx/store';
import { AnalyticsState } from './analytics.reducer';
import * as AppState from '@state/app.state';

export interface State extends AppState.State {
  analytics: AnalyticsState;
}

export const selectAnalytics = (state: State) => state.analytics;

export const selectLoading = createSelector(
  selectAnalytics,
  (state: AnalyticsState) => state.loading
);
