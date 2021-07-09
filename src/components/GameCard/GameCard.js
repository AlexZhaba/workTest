import React, { useRef } from 'react';
import styled from 'styled-components'
import { Container, Text, Rating } from '@shared';
import parsedDate from '@utils/parsedDate.js'
import { NavLink } from 'react-router-dom';


const GameCard = ({ game, handleCard }) => {


  return (
    // <NavLink to={`/${game.slug}`}>
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

const BottomContent = styled.div`
`;

const Info = styled.div`
  /* margin-top: 5px; */
`;

const CardContainer = styled(Container)`
  font-size: 14px;
  /* width: 400px; */
  padding: 0;
  padding-bottom: 3px;
  transition: .2s all;
  box-shadow: 0 0 5px 5px #222;

  :hover {
    transform: scale(1.05);
    transition: .2s all;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: .2s all;
  border-bottom: 2px solid ${props => props.theme.ORANGE_COLOR};
  :hover {
    /* ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: .2s all;
      background: rgba(0, 0, 0, 0.2);
    } */
    /* width: 120%; */
  }
`;

const MetaColor = (rate) => {
  if (rate <= 50) return 'red';
  if (rate <= 70) return 'yellow';
  return '#2eb949';
}

const Metacritic = styled.div`
  padding: 4px 8px;
  color: ${props => MetaColor(props.rate)};
  border-radius: 5px;
  border: 1px solid ${props => MetaColor(props.rate)};
  font-weight: 600;
  font-size: 14px;
  vertical-align: center;
  position: absolute;
  right: 10px;
  top: 10px;
`