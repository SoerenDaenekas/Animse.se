import './App.css';
import GlobalHeader from './GlobalHeader';
import Events from './Events'
import CreateAccount from './CreateAccount';
import CreateEvent from './CreateEvent';
import ActivateEmail from './ActivateEmail'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalHeader/>
      <Router>
        <Switch>
          <Route exact path="/" component={Events}/>
          <Route path="/createAccount" component={CreateAccount} />
          <Route path="/createEvent" component={CreateEvent} />
          <Route path="/activateEmail" component={ActivateEmail} />
          {/* <Route component={NotFoundScreen} status={404} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
