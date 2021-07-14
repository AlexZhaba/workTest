import React from 'react';
import styled from 'styled-components'
import { Container, Text, Rating } from '@shared';
import parsedDate from '@utils/parsedDate.js'
import { BottomContent, CardContainer, Image, Info } from './style.js';


const GameCard = ({ game, handleCard }) => {

  return (
    <CardContainer onClick={() => handleCard(game.slug)}>  
      <Image src={game.background_image && game.background_image.replace('/media/games', '/media/crop/600/400/games')}/>
      <BottomContent>
        <Container>
          <Text size='20px' style={{paddingRight: '42px'}} hover>
              {game.name}
          </Text>
          {game.metacritic && 
            <Rating rate={game.metacritic}>
                {game.metacritic}
            </Rating>
          }
        </Container>
        <Info>
          <Container style={{paddingTop: 0}}>
            <Text size='13px' display='block' font='Montserrat'>
              Release Date: <Text size='13px' font='Montserrat' weight='500'>{parsedDate(game.released)}</Text>
            </Text>
          </Container>
        </Info>
      </BottomContent>
    </CardContainer>
    // </NavLink>
  )
}

export default React.memo(GameCard, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

