import React from 'react';
import { orderName } from '../../config';
import { Wrapper, TextOrder } from './style.js';

const Order = ({ ordering, handleClick, setIsOpen }) => (
  <Wrapper key={ordering}>
    <TextOrder size='13px' hover font='Montserrat' onClick={() => handleClick(ordering, setIsOpen)}>{orderName[ordering]}</TextOrder>
  </Wrapper>  
)

export default Order;

