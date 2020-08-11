import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Sign = () => {
  return (
    <Switch>
      <Route path="/login" component={() => 'adss'} exact />
      <Redirect to="/login" />
    </Switch>
  );
};

export default Sign;
