import React from 'react';
import styled from 'styled-components';

import { Text, Rating } from '@shared';

import parseDate from '@utils/parsedDate.js'

const GameTitle = ({ text, rating, release }) => {
  return (
    <Wrapper>
      <Release>
        {parseDate(release)}
      </Release>
      <Adaptive size="50px">{text}</Adaptive>
      {rating && <Rating rate={rating} posIn style={{marginLeft: 15}}>{rating}</Rating>}
    </Wrapper>
  )
}

export default GameTitle;

const Release = styled.div`
  position: absolute;
  bottom: -20px;
  font-size: 13px;
  left: 0;
`;

const Adaptive = styled(Text)`
  @media(max-width: 1300px) {
    font-size: 30px;
    line-height: 30px;
  }

  @media(max-width: 800px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-top: 100px;
  margin-bottom: 30px;
  @media(max-width: 1300px) {
    margin-top: 20px;
  }
  
`;