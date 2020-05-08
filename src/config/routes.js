import React from 'react';
import FoMain from '../components/layouts-fo/Main';
//import Blank from '../components/layouts-fo/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import AboutView from '../views/fo/About';
import FoSchoolListView from '../views/fo/SchoolList';

import BoMain from '../components/layouts-bo/Main';

import BoSchoolFormView from '../views/bo/school/SchoolForm';

import {
  Switch,
  Link
} from "react-router-dom";

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={FoMain}>
            <IndexRedirect to="/main" />
            <Route path="main" component={MainView}> </Route>
            <Route path="minor" component={MinorView}> </Route>
            <Route path="about" component={AboutView}> </Route>
            <Route path="liste-ecole-primaire" component={FoSchoolListView}> </Route>
        </Route>
        <Route path="/bo" component={BoMain}>
            <Route path="school-form" component={BoSchoolFormView}> </Route>
        </Route>
    </Router>


);