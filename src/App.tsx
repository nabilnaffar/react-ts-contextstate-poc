import * as React from 'react';
import './App.css';

import { StoreProvider } from './state-manager/store';
import DevicesWithStore from './components/Devices';
import PlansWithStore from './components/Plans';
import { initialState } from './models/inner-state.model';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StoreProvider initialState={initialState}>
          <DevicesWithStore />
          <PlansWithStore />
        </StoreProvider>
      </div>
    );
  }
}

export default App;
