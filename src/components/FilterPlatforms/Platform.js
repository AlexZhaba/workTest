import React from 'react';
import styled from 'styled-components';

import { Text } from '@shared';

const Platform = ({ platform, handleClick, customTitle }) => {
  return (
    <Container key={platform.id}>
      <Text size='13px' hover font='Montserrat' style={{textOverflow: 'ellipsis', fontWeight: customTitle ? '600' : ''}} onClick={() => handleClick(platform)}>{customTitle || platform.name}</Text>
    </Container>
  )
}

export default Platform;

const Container = styled.div`
  width: 100%;
  /* font-size: 14px; */
  padding: 4px;
  padding-left: 10px;
`;