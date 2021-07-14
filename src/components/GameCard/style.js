import styled from 'styled-components';
import { Container } from '@shared';

export const BottomContent = styled.div`
`;

export const Info = styled.div`
`;

export const CardContainer = styled(Container)`
  font-size: 14px;
  padding: 0;
  padding-bottom: 3px;
  transition: .2s all;
  box-shadow: 0 0 5px 5px #222;

  :hover {
    transform: scale(1.05);
    transition: .2s all;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: .2s all;
  border-bottom: 2px solid ${props => props.theme.ORANGE_COLOR};
`;
