import React from 'react';
import styled from 'styled-components';

import { Text } from '@shared';
import { orderName } from '../../config';

const Order = ({ ordering, handleClick, setIsOpen }) => {
  return (
    <Container key={ordering}>
      <Text size='13px' hover font='Montserrat' style={{textOverflow: 'ellipsis'}} onClick={() => handleClick(ordering, setIsOpen)}>{orderName[ordering]}</Text>
    </Container>
  )
}

export default Order;

const Container = styled.div`
  width: 100%;
  /* font-size: 14px; */
  padding: 4px;
  padding-left: 10px;
`;