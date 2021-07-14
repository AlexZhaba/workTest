import React from 'react';
import { Container, TextPlatform } from './style.js'

const Platform = ({ platform, handleClick, customTitle }) => (
    <Container key={platform.id}>
      <TextPlatform size='13px' hover font='Montserrat' customTitle={customTitle} onClick={() => handleClick(platform)}>{customTitle || platform.name}</TextPlatform>
    </Container>
)

export default Platform;

