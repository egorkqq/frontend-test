import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import AppLayout from '../../components/AppLayout/AppLayout';
import Projects from '../Projects/Projects';

const RenderAuthorized = (props) => {
  const location = useLocation();

  return (
    <AppLayout>
      <Switch>
        <Route path="/projects" component={Projects} exact />
        <Redirect from="*" to="/projects" />
      </Switch>
    </AppLayout>
  );
};

export default RenderAuthorized;
