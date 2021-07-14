import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadGameDetail, setGameDetail} from '@redux/action-creators';
import GameTitle from '@com/GameTitle/GameTitle.js';
import { Wrapper, Background, BackgroundShadow,
         ContentPadding, TopContainer, Info,
         HeadLine, SliderWrapper, Slider, TestImg, Description, SliderButton
       } from './style.js';

const GamePage = ( props ) => {
  const { games, loadGameDetail, gameDetail } = props;
  const [activeGame, setActiveGame] = useState();
  const [sliderOffset, setSliderOffset] = useState(0);

  useEffect( () => {
    if (!gameDetail) loadGameDetail(props.match.params.slug);
    if (props.match.params.slug && !activeGame && games && !gameDetail) {
      setActiveGame(games.filter(g => g.slug === props.match.params.slug)[0]);
    }
  }, [props.match.params.slug]);

  useEffect(() => {
    if (gameDetail) {
      setActiveGame(gameDetail);
    }
  }, [gameDetail]);

  const handleSlider = (dir) => {
    const width = document.getElementById('slider__wrapper').clientWidth;
    if (dir === 'RIGHT') {
      console.log((width - 1) * gameDetail.screenshots.length)
      if (sliderOffset + Number(width) > (width - 1) * gameDetail.screenshots.length) return;
      setSliderOffset(sliderOffset + Number(width));

    }
    else {
      if (sliderOffset - Number(width) < 0) return;
      setSliderOffset(sliderOffset - Number(width));
    }
  };

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
          <SliderWrapper id='slider__wrapper'>
            <SliderButton left onClick={() => handleSlider('LEFT')}/>
            <SliderButton right onClick={() => handleSlider('RIGHT')}/>
            <Slider offset={sliderOffset}>
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

