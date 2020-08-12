import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bootstrap } from './actions';
import { Spin, Space } from 'antd';
import Sign from './Sign';
import RenderAuthorized from './RenderAuthorized';
import { loadingSelector, signedInSelector } from './selectors';
import Loader from '../../components/Loader/Loader';

const AppBootsrap = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector(loadingSelector);
  const signedIn = useSelector(signedInSelector);

  useEffect(() => {
    dispatch(bootstrap());
  }, [dispatch]);

  if (loading) return <Loader />;

  return <>{!signedIn ? <Sign /> : <RenderAuthorized />}</>;
};

export default AppBootsrap;
