import styled from 'styled-components';

let getColor = props => {
  if (props.orange) return props.theme.ORANGE_COLOR;
  if (props.darkOrange) return props.theme.DARK_ORANGE;
  // if (props.colorInherit) return 'inherit';
  return  props.color || '#FFFFFF';
}

const Text = styled.span`
  font-size: ${props => props.size || '18px'};
  line-height: ${props => props.size || '18px'};
  font-weight: ${props => props.weight || '400'};
  color: ${props => getColor(props)};
  font-family: ${props => props.font || 'Righteous'};
  transition: .2s all;
  display: ${props => props.display || 'inline-block'};
  ${props => props.hover ? `
    :hover {
      transition: .2s all;
      cursor: pointer;
      color: ${getColor(props)}${props.hoverOp ? props.hoverOp : 'BF'};
    }
    :active {
      transition: .2s all;
      cursor: pointer;
      color: ${getColor(props)}${props.hoverOp ? props.hoverOp : 'A5'};
    }
  `
  : ''}
`;

export default Text;