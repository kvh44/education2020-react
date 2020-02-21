import React from 'react';
import Main from '../components/layouts-fo/Main';
import Blank from '../components/layouts-fo/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import AboutView from '../views/fo/About';
import SchoolListView from '../views/fo/SchoolList';
import {
  Switch,
  Link
} from "react-router-dom";

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/main" />
            <Route path="main" component={MainView}> </Route>
            <Route path="minor" component={MinorView}> </Route>
            <Route path="about" component={AboutView}> </Route>
            <Route path="liste-ecole-primaire" component={SchoolListView}> </Route>
        </Route>
    </Router>


);