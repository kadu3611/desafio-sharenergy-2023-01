import React from 'react';
import Login from './pages/Login';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import RandomUserGeneration from './pages/RandomUserGeneration';
import StatusCodeCat from './pages/StatusCodeCat';
import RandomDogs from './pages/RandomDogs';
import Clients from './pages/Clients';


const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/login"/>
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/userlist" component={ RandomUserGeneration }/>
      <Route exact path="/userlist/randomDogs" component={ RandomDogs }/>
      <Route exact path="/userlist/clients" component={ Clients }/>
      <Route exact path="/userlist/:id" component={ StatusCodeCat }/>


    </Switch>
  );
}

export default App;
