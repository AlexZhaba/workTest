import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.DARK_BCG_COLOR};
  padding: ${props => props.pad || '10px'};
  border-radius: 8px;
  overflow: ${props => props['no-overflow'] ? '' : 'hidden'};
  position: relative;
  transition: .2s all;
  ${props => {
    if (props.active) return `
      box-shadow: 0px 0px 0px 2px ${props.theme.ORANGE_COLOR};
      transition: .2s all;
    `;
  }};
`;

export default Container;