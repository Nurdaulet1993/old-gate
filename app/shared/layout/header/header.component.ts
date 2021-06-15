import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@state/index';
import { toggleSidenav } from '@state/settings';
import { AuthActions } from '@state/auth/actions';
import { selectUser } from '@state/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$ = this.store.select(selectUser);

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    this.store.dispatch(toggleSidenav());
  }

  onLogout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
