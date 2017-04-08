import { rootReducer } from './reducers/rootReducer';
import { IAppState } from './reducers/types';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [], // middlewares
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );

  }
}
