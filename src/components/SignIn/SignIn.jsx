import React from 'react';
import { Input, Checkbox, Button } from 'antd';
import './SignIn.sass';
import logo from '../../assets/mimc-logo.png';

const SignIn = () => {
  return (
    <section className="SignIn">
      <div className="SignIn__Content">
        <img className="SignIn__Logo" alt="MIMC" src={logo} />
        <div className="SignIn__Wrapper">
          <div className="SignIn__Field">
            <span>Логин</span>
            <Input placeholder="Логин" />
          </div>
          <div className="SignIn__Field">
            <span>Пароль</span>
            <Input placeholder="Пароль" />
          </div>
          <div className="SignIn__Field">
            <Checkbox>Запомнить пароль</Checkbox>
          </div>
          <Button className="SignIn__Button" type="primary" size="large">
            Войти
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
