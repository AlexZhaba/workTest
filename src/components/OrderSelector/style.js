import styled from 'styled-components';
import { Container } from '@shared';

export const Dropdown = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 190px;
  min-width: 100%;
  color: #FFF;
  padding: 10px 0;
  background: ${props => props.theme.DARK_BCG_COLOR};
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
`;

export const Wrapper = styled.div`
  width: 100%;
  /* font-size: 14px; */
  padding: 4px;
  padding-left: 10px;
`;