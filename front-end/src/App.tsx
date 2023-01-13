import React from 'react';
import Login from './pages/Login';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import RandomUserGeneration from './pages/RandomUserGeneration';


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/login"/>
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/userlist" component={ RandomUserGeneration }/>
    </Switch>
  );
}

export default App;
