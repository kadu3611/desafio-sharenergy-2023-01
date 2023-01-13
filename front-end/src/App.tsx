import React from 'react';
import Login from './screens/Login';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/login"/>
      </Route>
      <Route exact path="/login" component={ Login } />
    </Switch>
  );
}

export default App;
