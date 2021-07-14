import styled from 'styled-components';
import { Text } from '@shared'

export const Container = styled.div`
  width: 100%;
  padding: 4px;
  padding-left: 10px;
`;

export const TextPlatform = styled(Text)`
  text-overflow: 'ellipsis'; 
  font-weight: ${props => props.customTitle ? '600' : ''};
`;

export const Dropdown = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #FFF;
  padding: 10px 0;
  background: ${props => props.DARK_BCG_COLOR};
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  /* box-shadow: 0 0 10px 5px #222; */
`;

export const Wrapper = styled.div`
  margin-left: 10px;
`;

export const ParentContainer = styled.div`
  height: ${props => props.parentPlatform ? '0px': ''};
  overflow: hidden;
`;

export const PlatformTitle = styled(Text)`
  min-width: 100;
  text-align: center;
`;