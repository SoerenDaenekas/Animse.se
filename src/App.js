import './App.css';
import GlobalHeader from './GlobalHeader';
import Events from './Events'
import CreateAccount from './CreateAccount';
import CreateEvent from './CreateEvent';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
          <GlobalHeader/>
          <Switch>
            <Route exact path="/" component={Events} />
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/createEvent" component={CreateEvent} />
            {/* <Route component={NotFoundScreen} status={404} /> */}
          </Switch>
      </React.Fragment>

    </Router>

  );
}

export default App;
