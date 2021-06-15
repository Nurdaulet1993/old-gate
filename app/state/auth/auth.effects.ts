import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@core/services/auth.service';
import { AuthActions, AuthApiActions } from './actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from '@shared/models';
import { EMPTY, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    switchMap(({ password, username }) =>
      this.authService.signIn(username, password).pipe(
        map((user: User) => AuthApiActions.loginSuccess({ user }))
      )
    ),
    catchError(err => EMPTY)
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap( () => {
      this.authService.logout();
      localStorage.removeItem('userData');
      this.router.navigate(['/sign-in']);
    })
  ), { dispatch: false });

  loginAuto$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginAouto),
    map(() => {
      const user: User | null = this.authService.getUser();
      if (!user) {
        return { type: AuthApiActions.AuthApiActionsTypes.LOGIN_FAILED, error: 'Login failed'};
      }

      return AuthApiActions.loginSuccess({ user });
    })
  ));

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthApiActions.loginSuccess),
    tap(({ user }) => {
      localStorage.setItem('userData', JSON.stringify(user));
      this.router.navigate(['/']);
    })
  ), { dispatch: false });

  loginFail$ = createEffect(() => this.actions$.pipe(
    ofType(AuthApiActions.loginFailed),
    tap((err) => {
      this.router.navigate(['/sign-in']);
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
