import React, { useMemo } from 'react';
import { Input, Checkbox, Button } from 'antd';
import './SignIn.sass';
import logo from '../../assets/mimc-logo.png';

const SignIn = (props) => {
  const {
    onSubmit,
    onChangePassword,
    onChangeLogin,
    login,
    password,
    error,
  } = props;

  const isDisabled = useMemo(() => {
    return login.length < 3 || password.length < 4;
  }, [login, password]);

  return (
    <section className="SignIn">
      <div className="SignIn__Content">
        <img className="SignIn__Logo" alt="MIMC" src={logo} />
        <div className="SignIn__Wrapper">
          {error && (
            <div className="SignIn__Field SignIn__Field--error">
              Учетные данные введены неверно
            </div>
          )}
          <div className="SignIn__Field">
            <span>Логин</span>
            <Input value={login} onChange={onChangeLogin} placeholder="Логин" />
          </div>
          <div className="SignIn__Field">
            <span>Пароль</span>
            <Input
              value={password}
              onChange={onChangePassword}
              placeholder="Пароль"
              type="password"
              onPressEnter={!isDisabled && onSubmit}
            />
          </div>
          <div className="SignIn__Field">
            <Checkbox>Запомнить пароль</Checkbox>
          </div>
          <Button
            disabled={isDisabled}
            onClick={onSubmit}
            className="SignIn__Button"
            type="primary"
            size="large"
          >
            Войти
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
