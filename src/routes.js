import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Student from "./pages/student/Student";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/student" component={Student} />
      <Route exact path="/student/statistics" component={Student} />
    </Switch>
  </Router>
);

export default Routes;
