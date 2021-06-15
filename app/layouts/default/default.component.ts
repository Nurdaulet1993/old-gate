import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectSidenavOpen } from '../../state';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sidenavOpen$ = this.store.select(selectSidenavOpen);

  constructor(private store: Store<State>) { }

  ngOnInit(): void {}

}
