import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

import Home from 'pages/home';
import Registration from 'pages/registration';
import RequestSchedule from 'pages/request-schedule';
import EnterToken from 'pages/enter-token';
import UploadResume from 'pages/upload-resume';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
     
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>

        <Route path="/enter-token">
          <EnterToken />
        </Route>
        <PrivateRoute path="/request-schedule">
          <RequestSchedule />
        </PrivateRoute>

        <PrivateRoute path="/upload-resume">
          <UploadResume />
        </PrivateRoute>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
