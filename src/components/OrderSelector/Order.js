import React from 'react';
import { Text } from '@shared';
import { orderName } from '../../config';
import { Wrapper } from './style.js';

const Order = ({ ordering, handleClick, setIsOpen }) => (
  <Wrapper key={ordering}>
    <Text size='13px' hover font='Montserrat' style={{textOverflow: 'ellipsis'}} onClick={() => handleClick(ordering, setIsOpen)}>{orderName[ordering]}</Text>
  </Wrapper>  
)

export default Order;

