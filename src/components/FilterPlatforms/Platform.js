import React from 'react';
import { Text } from '@shared';
import { Container } from './style.js'

const Platform = ({ platform, handleClick, customTitle }) => (
    <Container key={platform.id}>
      <Text size='13px' hover font='Montserrat' style={{textOverflow: 'ellipsis', fontWeight: customTitle ? '600' : ''}} onClick={() => handleClick(platform)}>{customTitle || platform.name}</Text>
    </Container>
)

export default Platform;

