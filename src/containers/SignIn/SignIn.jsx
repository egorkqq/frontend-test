import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../AppBootstrap/actions';
import { default as SignInComponent } from '../../components/SignIn/SignIn';
import { loginErrorSelector } from '../AppBootstrap/selectors';

const SignIn = () => {
  const dispatch = useDispatch();
  const error = useSelector(loginErrorSelector);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = useCallback(() => {
    dispatch(signIn(login, password));
  }, [login, password, dispatch]);

  const onChangePassword = useCallback(({ target: { value } }) => {
    setPassword(value);
  }, []);

  const onChangeLogin = useCallback(({ target: { value } }) => {
    setLogin(value);
  }, []);

  return (
    <SignInComponent
      onSubmit={onSubmit}
      onChangePassword={onChangePassword}
      onChangeLogin={onChangeLogin}
      login={login}
      password={password}
      error={error}
    />
  );
};

export default SignIn;
