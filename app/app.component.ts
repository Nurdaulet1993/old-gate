import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@state/app.state';
import {loginAouto} from '@state/auth/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) {}


  ngOnInit(): void {
    this.store.dispatch(loginAouto());
  }
}
