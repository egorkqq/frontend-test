import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

const Sign = () => {
  return (
    <Switch>
      <Route path="/login" component={SignIn} exact />
      <Redirect to="/login" />
    </Switch>
  );
};

export default Sign;
