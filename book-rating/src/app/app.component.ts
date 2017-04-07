import { Component } from '@angular/core';
import { DevToolsExtension, NgRedux } from '@angular-redux/store';
import { IAppState } from './reducers/types';
import { rootReducer } from './reducers/rootReducer';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<IAppState>
  ) {

    ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [],
      devTools.isEnabled() ? [devTools.enhancer()] : []);
  }
}
