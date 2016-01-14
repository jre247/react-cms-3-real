import React from 'react';
import {Route} from 'react-router';
import App from './components/app';
import Home from './components/Home';
import PageReadOnly from './components/Page/PageReadOnly';
import PageEdit from './components/Page/PageEdit';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import RoleManager from './components/Auth/RoleManager';
import RoleManagerUser from './components/Auth/RoleManagerUser';

export default (
  <Route component={App}>
    <Route path='/' component={PageReadOnly} />
    <Route path='/page/:name/edit' component={PageEdit} />
    <Route path='/page/:name' component={PageReadOnly} />
    <Route path='/auth/signup' component={Signup} />
    <Route path='/auth/login' component={Login} />
    <Route path='/auth/role-manager' component={RoleManager} />
    <Route path='/auth/role-manager/users/:id' component={RoleManagerUser} />
  </Route>
);
