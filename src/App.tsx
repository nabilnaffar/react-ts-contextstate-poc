import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { StoreProvider } from './state-manager/store';
import DevicesWithStore from './components/Devices';
import PlansWithStore from './components/Plans';
import { initialState } from './models/inner-state.model';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StoreProvider initialState={initialState}>
          <DevicesWithStore />
          <PlansWithStore />
        </StoreProvider>
      </div>
    );
  }
}

export default App;
