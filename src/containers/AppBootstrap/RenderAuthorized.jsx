import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import AppLayout from '../../components/AppLayout/AppLayout';

const RenderAuthorized = (props) => {
  const location = useLocation();

  return (
    <AppLayout>
      <Switch>
        <Route path="/home" render={() => 'sdfds'} exact />
        <Redirect from="*" to="/home" />
      </Switch>
    </AppLayout>
  );
};

export default RenderAuthorized;
