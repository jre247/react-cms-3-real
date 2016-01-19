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
import PagesAdministration from './components/Admin/PagesAdministration';
import PageAdministrationEdit from './components/Admin/PageAdministrationEdit';
import PageAdministrationCreate from './components/Admin/PageAdministrationCreate';
import AppSettings from './components/Admin/AppSettings';
import AppSetting from './components/Admin/AppSetting';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/:name/edit' component={PageEdit} />
    <Route path='/:name' component={PageReadOnly} />
    <Route path='/auth/signup' component={Signup} />
    <Route path='/auth/login' component={Login} />
    <Route path='/auth/role-manager' component={RoleManager} />
    <Route path='/auth/role-manager/users/:id' component={RoleManagerUser} />
    <Route path='/admin/pages' component={PagesAdministration} />
    <Route path='/admin/pages/:id/edit' component={PageAdministrationEdit} />
    <Route path='/admin/pages/create' component={PageAdministrationCreate} />
    <Route path='/admin/app-settings' component={AppSettings} />
    <Route path='/admin/app-settings/:id/edit' component={AppSetting} />
  </Route>
);
