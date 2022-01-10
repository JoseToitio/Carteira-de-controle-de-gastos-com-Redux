import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from 'react-redux/lib/components/Provider';
import Login from './pages/Login';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
