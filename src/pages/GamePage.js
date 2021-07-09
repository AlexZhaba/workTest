import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Text } from '@shared';
import { loadGameDetail, setGameDetail} from '@redux/action-creators';

import GameTitle from '@com/GameTitle/GameTitle.js'

const GamePage = ( props ) => {

  const { games, loadGameDetail, gameDetail } = props;
  const [activeGame, setActiveGame] = useState();

  useEffect( () => {
    if (!gameDetail) loadGameDetail(props.match.params.slug)
    if (props.match.params.slug && !activeGame && games && !gameDetail) {
      setActiveGame(games.filter(g => g.slug === props.match.params.slug)[0])
    }
  }, [props.match.params.slug])

  useEffect(() => {
    if (gameDetail) {
      setActiveGame(gameDetail)
    }
  }, [gameDetail])

  if (!activeGame) return <div></div>

  return (
    <Wrapper>
      <Background src={activeGame.background_image}/>
      <BackgroundShadow/>
      <ContentPadding>
        <BackgroundShadow/>
        <GameTitle text={activeGame.name} rating={activeGame.metacritic} release={activeGame.released}/>
        <TopContainer>
          <Info>
            <HeadLine size="25px" style={{marginTop: 20}}>About</HeadLine>
            {gameDetail && <Description dangerouslySetInnerHTML={{ __html: gameDetail.description }} ></Description>}
          </Info>
          <SliderWrapper>
            <Slider>
              {gameDetail?.screenshots && gameDetail.screenshots.map(screenshot => 
                  <TestImg src={screenshot.image}/>
                )}
            </Slider>
          </SliderWrapper>
        </TopContainer>
      </ContentPadding>
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  games: state.app.games,
  gameDetail: state.app.gameDetail,
});

export default connect(mapStateToProps, { loadGameDetail, setGameDetail })(GamePage);

const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  @media(max-width: 1300px) {
    flex-direction: column;
  }
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: coыlumn; */
`;

const SliderWrapper = styled.div`
   flex: 5;
  /* height: 300px; */
  overflow-x: scroll;
  min-height: 300px;
  @media(max-width: 1300px) {
    width: 100%;
    order: 1;
  }
  @media(max-width: 700px) {
    min-height: 250px;
  }
`;

const Info = styled.div`
  flex: 3;
  margin-right: 20px;

  @media(max-width: 1300px) {
    order: 2;
  }
`;

const TestImg = styled.div`
  height: 400px;
  background: url('${props => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* flex: 1; */
  width: 100%;
  flex-shrink: 0;
  transition: .2s all;
  @media(max-width: 700px) {
    height: 250px;
  }
  :hover {
    /* flex: 10;
    transition: .2s all; */
  }
`;

const HeadLine = styled(Text)`
  padding-bottom: 3px;
  border-bottom: 4px solid ${props => props.theme.ORANGE_COLOR};
`;
const Description = styled.div`
  margin-top: 5px;
  font-size: 16px;
`;

const Background = styled.img`
  z-index: -5;
  position: absolute;
  top: -250px;
  left: 0;
  width: 100%;
  @media(max-width: 1300px) {
    display: none;
  }
`;

const BackgroundShadow = styled.div`
  z-index: -4;
  position: absolute;
  top: 200px;
  left: 0;
  bottom: 0;
  width: 100%;
  /* height: 400px; */
  background: linear-gradient(0deg, rgba(29, 27, 31, 1) 75%, rgba(29, 27, 31, 0) 100%);
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 150px);
  position: relative;
  padding-bottom: 50px;
  /* height: 100%; */
  @media(max-width: 1300px) {
    min-height: calc(100vh - 70px)
  }
`;

const ContentPadding = styled.div`
  width: 100%;
  padding: 0 125px;

  @media(max-width: 1100px) {
    padding: 0 50px;
  }
  @media(max-width: 700px) {
    padding: 0 20px;
  }
`;