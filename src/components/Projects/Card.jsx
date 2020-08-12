import React from 'react';
import { Card as AntCard, Avatar, Tag, Tooltip, Progress } from 'antd';
import {
  UserOutlined,
  AntDesignOutlined,
  CalendarOutlined,
  EuroOutlined,
} from '@ant-design/icons';

const { Meta } = AntCard;

const Card = (props) => {
  const {
    image,
    category,
    status,
    title,
    dates,
    owner,
    administrator,
    progress,
  } = props;

  return (
    <AntCard
      className="Projects__Card"
      style={{ width: 300 }}
      cover={(
        <div className="Projects__CardCover">
          <Tag className="Projects__CategoryTag" color="#fff">
            {category}
          </Tag>
          <Tag className="Projects__StatusTag" color="#f50">
            {status}
          </Tag>
          <img alt="example" src={image} />
        </div>
      )}
    >
      <Meta
        title={title}
        description={(
          <div>
            <div className="Projects__CardInfo">
              <div>
                <CalendarOutlined /> 
                {' '}
                {dates}
              </div>
              <div>
                <UserOutlined /> 
                {' '}
                {owner}
              </div>
              <div>
                <EuroOutlined />
                {' '}
                {administrator}
              </div>
            </div>
            <div className="Projects__ListWrapper">
              <Avatar.Group>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: '#1890ff' }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
              <Progress
                showInfo={false}
                type="circle"
                percent={progress}
                width={28}
                strokeWidth={16}
                strokeColor="17d000"
              />
            </div>
          </div>
        )}
      />
    </AntCard>
  );
};

export default Card;
