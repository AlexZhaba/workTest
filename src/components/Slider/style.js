import styled from 'styled-components';

export const Slider = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  transition: .2s all;
  transform: translateX(-${props => props.offset}%);
`;

export const SliderButton = styled.div`
  position: absolute;
  top: 50%;
  z-index: 3;
  left: ${props => props.left ? '0' : ''};
  right: ${props => props.right ? '0' : ''};
  background: url('https://image.flaticon.com/icons/png/512/271/271228.png');
  background-size: cover;
  transform: ${props => props.left ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)'};
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const SliderWrapper = styled.div`
   flex: 5;
  overflow-x: hidden;
  min-height: 300px;
  position: relative;
  @media(max-width: 1300px) {
    width: 100%;
    order: 1;
  }
  @media(max-width: 700px) {
    min-height: 250px;
  }
`;

export const TestImg = styled.div`
  height: 400px;
  background: url('${props => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  flex-shrink: 0;
  transition: .2s all;
  @media(max-width: 700px) {
    height: 250px;
  }
  :hover {
  }
`;