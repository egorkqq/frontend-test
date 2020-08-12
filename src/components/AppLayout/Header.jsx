import React from 'react';
import { Avatar } from 'antd';

const Header = (props) => {
  const { onExit } = props;

  return (
    <>
      <Avatar
        className="AppLayout__Exit"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        onClick={onExit}
      />
    </>
  );
};

export default Header;
