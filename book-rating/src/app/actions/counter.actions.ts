import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../reducers/types';

@Injectable()
export class CounterActions {
  static INCREMENT_COUNTER = 'INCREMENT_COUNTER';
  // static DECREMENT_COUNTER = 'DECREMENT_COUNTER'; // TODO! :-)

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    this.ngRedux.dispatch({ type: CounterActions.INCREMENT_COUNTER });
  }
}
