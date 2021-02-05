import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from "./pages/Signup";
import Home from "./pages/home/Home";
import Student from "./pages/student/Student";
import StudentStatistics from "./pages/studentStatistics/StudentStatistics";
import Teacher from './pages/teacher/Teacher';
import AdminNewLesson from "./pages/admin/AdminNewLesson";
import AdminNewTurnus from "./pages/admin/AdminNewTurnus";
import AdminNewTeacher from "./pages/admin/AdminNewTeacher";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/student" component={Student} />
      <Route exact path="/student/statistics" component={StudentStatistics} />
      <Route exact path="/teacher" component={Teacher} />
      <Route exact path="/admin/new-lesson" component={AdminNewLesson} />
      <Route exact path="/admin/new-turnus" component={AdminNewTurnus} />
      <Route exact path="/admin/new-teacher" component={AdminNewTeacher} />
    </Switch>
  </Router>
);

export default Routes;
