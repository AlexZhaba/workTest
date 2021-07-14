import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import GameList from '@com/GameList/GameList';
import FilterPanel from '@com/FilterPanel/FilterPanel'

import { loadGames, loadPlatforms, loadGameDetail } from '@redux/action-creators'
import { MainWrapper, ContentContainer } from './style.js';
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
          loadGameDetail={props.loadGameDetail}
        />
      </ContentContainer>
    </MainWrapper>
  )
}

const mapStateToProps = (state) => ({
  games: state.app.games,
  platforms: state.app.platforms
})

export default connect(mapStateToProps, { loadGames, loadPlatforms, loadGameDetail })(Main);

