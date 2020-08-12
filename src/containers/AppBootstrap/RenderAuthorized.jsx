import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import AppLayout from '../../components/AppLayout/AppLayout';
import Sidebar from '../../components/AppLayout/Sidebar';
import Header from '../../components/AppLayout/Header';
import Projects from '../Projects/Projects';

const RenderAuthorized = (props) => {
  const location = useLocation();

  const sider = <Sidebar current={location.pathname} />;
  const header = <Header onExit={() => {}} />;

  return (
    <AppLayout header={header} sider={sider} location={location}>
      <Switch>
        <Route path="/projects" component={Projects} exact />
        <Redirect from="*" to="/projects" />
      </Switch>
    </AppLayout>
  );
};

export default RenderAuthorized;
