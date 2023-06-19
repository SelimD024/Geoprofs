import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App.tsx'
import Bezetting from './Bezetting.tsx'
import Dashboard from './Dashboard.tsx'
import Verlof from './Verlof.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/Bezetting">
          <Bezetting />
        </Route>
        <Route exact path="/Verlof">
          <Verlof />
        </Route>
        <Route exact path="*">
          <p>Not found</p>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
)
