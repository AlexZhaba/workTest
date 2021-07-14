import styled from 'styled-components';
import { Text } from '@shared';

export const Release = styled.div`
  position: absolute;
  bottom: -20px;
  font-size: 13px;
  left: 0;
`;

export const Adaptive = styled(Text)`
  @media(max-width: 1300px) {
    font-size: 30px;
    line-height: 30px;
  }

  @media(max-width: 800px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-top: 100px;
  margin-bottom: 30px;
  @media(max-width: 1300px) {
    margin-top: 20px;
  }
`;