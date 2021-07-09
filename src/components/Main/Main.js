import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import GameList from '@com/GameList/GameList';
import FilterPanel from '@com/FilterPanel/FilterPanel'

import { loadGames, loadPlatforms } from '@redux/action-creators'
import { useScroll } from '@hooks/useScroll.js'

const Main = (props) => {

  return (
    <MainWrapper>
      <ContentContainer>
        <FilterPanel/>
        <GameList 
          games={props.games} 
          loadGames={props.loadGames} 
          loadPlatforms={props.loadPlatforms}
          platforms={props.platforms}
        />
      </ContentContainer>
    </MainWrapper>
  )
}

let mapStateToProps = (state) => ({
  games: state.app.games,
  platforms: state.app.platforms
})

export default connect(mapStateToProps, { loadGames, loadPlatforms })(Main);

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;  
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 0 100px;

  @media(max-width: 1100px) {
    padding: 0 50px;
  }
  @media(max-width: 900px) {
    padding: 0 100px;
  }
  @media(max-width: 700px) {
    padding: 0 20px;
  }
  @media(max-width: 500px) {
    padding: 0 0px;
  }
`;