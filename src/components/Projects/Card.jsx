import React from 'react';
import { Card as AntCard, Avatar, Tag, Tooltip, Progress } from 'antd';
import {
  UserOutlined,
  AntDesignOutlined,
  CalendarOutlined,
  EuroOutlined,
} from '@ant-design/icons';

const { Meta } = AntCard;

const Card = () => {
  return (
    <AntCard
      className="Projects__Card"
      style={{ width: 300 }}
      cover={(
        <div className="Projects__CardCover">
          <Tag className="Projects__CategoryTag" color="#fff">
            #f50
          </Tag>
          <Tag className="Projects__StatusTag" color="#f50">
            #f50
          </Tag>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </div>
      )}
    >
      <Meta
        title="Терапевтический корпус"
        description={(
          <div>
            <div className="Projects__CardInfo">
              <div>
                <CalendarOutlined />
                {' '}
                08.04.3030 -- 09.30.3030 yy.
              </div>
              <div>
                <UserOutlined />
                {' '}
                Dan Konev
              </div>
              <div>
                <EuroOutlined />
                {' '}
                Grosslim LLC
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
                percent={75}
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
