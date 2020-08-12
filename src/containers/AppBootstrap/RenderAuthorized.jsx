import React, { useCallback } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import AppLayout from '../../components/AppLayout/AppLayout';
import Sidebar from '../../components/AppLayout/Sidebar';
import Header from '../../components/AppLayout/Header';
import Projects from '../Projects/Projects';
import { useDispatch } from 'react-redux';
import { exit } from './actions';

const RenderAuthorized = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const onExit = useCallback(() => {
    dispatch(exit());
  }, [dispatch]);

  const sider = <Sidebar current={location.pathname} />;
  const header = <Header onExit={onExit} />;

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
