import React from 'react';
import {Typography} from 'antd'

const { Text } = Typography;

const IconText = ({ icon: Icon, text, ...rest }) => (
  <Text {...rest} style={{ display: 'flex', alignItems: 'center' }} >
    <Icon style={{ marginRight: 8 }} />
    <span>{text}</span>
  </Text>
);

export default  IconText;