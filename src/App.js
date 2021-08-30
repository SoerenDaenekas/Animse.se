import './App.css';
import GlobalHeader from './GlobalHeader';
import Events from './Events'
import CreateAccount from './CreateAccount';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">

          <GlobalHeader/>
          <Switch>
            <Route path="/events" component={Events} />
            <Route path="/createAccount" component={CreateAccount} />
            {/* <Route component={NotFoundScreen} status={404} /> */}
          </Switch>
        </div>
      </React.Fragment>

    </Router>

  );
}

export default App;
