import React from 'react';
import styled from 'styled-components';
import Header from '@com/Header/Header';
import { Switch, Route } from 'react-router';
import Main from '@pages/Main/Main.js';
import GamePage from '@pages/GamePage/GamePage.js';

const App = () => (
    <AppWrapper id="appWrapper">
      <Header/>
      <Switch>
        <Route exact path='/' render={ () => <Main/> }/>
        <Route path='/:slug' render={ (props) => <GamePage {...props} />}/>
      </Switch>
    </AppWrapper>
  )

export default App;

const AppWrapper = styled.div`
  background: ${props => `${props.theme.DARK_BCG_COLOR}F0`};
  min-height: calc(100vh);
  color: ${props => props.theme.TEXT_COLOR};
  font-family: 'Kanit';
  font-weight: 300;
  font-size: 20px;
  z-index: -10;
  overflow: hidden;
`;