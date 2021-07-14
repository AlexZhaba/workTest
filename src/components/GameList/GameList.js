import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router';
import useScroll from '@hooks/useScroll.js'
import { List, LoadingContainer } from './style.js'
import Loader from '@com/Loader/Loader.js';
import GameCard from '@com/GameCard/GameCard.js'

const GameList = ({ games, loadGames, loadPlatforms, platforms, loadGameDetail, loading }) => {
  
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

  return (
    <div>
      <List>
        <LoadingContainer loading={loading}>
          <Loader/>
        </LoadingContainer>
        {(platforms && games) && games.map((game, id) => <GameCard game={game} key={id} handleCard={handleCard}/>)}
      </List>
    </div>
  )
}

export default withRouter(GameList);

