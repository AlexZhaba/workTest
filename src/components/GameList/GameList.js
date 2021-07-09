import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router';
import useScroll from '@hooks/useScroll.js'


import GameCard from '@com/GameCard/GameCard.js'

const GameList = ({ games, loadGames, loadPlatforms, platforms, loadGameDetail }) => {
  
  const history = useHistory();

  useScroll(() => {
    loadGames('ADD');
  })
  
  
  useEffect(() => {
    if (!games || !platforms) {
      loadGames();
      loadPlatforms();
    }
  }, [])

  const handleCard = (slug) => {
    loadGameDetail(slug, () => {
      history.push(`/${slug}`)
    })
  }

  if (!platforms || !games) return <div></div>

  return (
    <div>
      <List>
        {games && games.map((game, id) => <GameCard game={game} key={id} handleCard={handleCard}/>)}
      </List>
    </div>
  )
}

export default withRouter(GameList);

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 30px;

  @media(max-width: 1600px) {
    grid-template-columns: 1fr  1fr 1fr;
  }
  @media(max-width: 1100px) {
    grid-template-columns: 1fr  1fr;
  }
  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;