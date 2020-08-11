import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '../../components/AppLayout/AppLayout';
import { bootstrap } from './actions';
import { Spin, Space } from 'antd';
import Sign from './Sign';
import RenderAuthorized from './RenderAuthorized';

const AppBootsrap = (props) => {
  const dispatch = useDispatch();

  const loading = false;
  const signedIn = false;

  useEffect(() => {
    dispatch(bootstrap());
  }, [dispatch]);

  if (loading)
    return (
      <Space size="middle">
        <Spin size="large" />
      </Space>
    );

  return <>{!signedIn ? <Sign /> : <RenderAuthorized />}</>;
};

export default AppBootsrap;
