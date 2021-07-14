import React, { useState } from 'react';
import { SliderWrapper, SliderButton, Slider, TestImg } from './style.js';

const Slider_ = ({ gameDetail }) => {

  const [sliderOffset, setSliderOffset] = useState(0);

  const handleSlider = (dir) => {
    if (dir === 'RIGHT') {
      if (sliderOffset + 100 > 100 * (gameDetail.screenshots.length - 1)) return;
      setSliderOffset(sliderOffset + 100);

    }
    else {
      if (sliderOffset - 100 < 0) return;
      setSliderOffset(sliderOffset - 100);
    }
  };

  return (
    <SliderWrapper id='slider__wrapper'>
      <SliderButton left onClick={() => handleSlider('LEFT')}/>
      <SliderButton right onClick={() => handleSlider('RIGHT')}/>
      <Slider offset={sliderOffset}>
        {gameDetail?.screenshots && gameDetail.screenshots.map(screenshot => 
            <TestImg src={screenshot.image}/>
          )}
      </Slider>
    </SliderWrapper>
  )
}

export default Slider_;