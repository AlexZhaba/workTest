import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(2, auto);
  grid-gap: 30px;
`;

export const Spin = styled.div`
  width: 50px;
  height: 50px;
  border: 7px solid #FFF;
  border-radius: 50%;
  border-left-color: ${props => props.theme.ORANGE_COLOR};
  animation-name: ${spin};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;