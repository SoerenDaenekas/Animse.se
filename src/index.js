import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './index.scss';

import GlobalHeader from './GlobalHeader';
import Events from './Events'
import CreateAccount from './CreateAccount';
import CreateEvent from './CreateEvent';
import ActivateEmail from './ActivateEmail'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
