import React from 'react';

import { Text, Rating } from '@shared';
import { Wrapper, Release, Adaptive } from './style.js';
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

