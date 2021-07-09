import styled from 'styled-components';
const MetaColor = (rate) => {
  if (rate <= 50) return 'red';
  if (rate <= 70) return 'yellow';
  return '#2eb949';
}

const Metacritic = styled.div`
  padding: 4px 8px;
  color: ${props => MetaColor(props.rate)};
  border-radius: 5px;
  border: 1px solid ${props => MetaColor(props.rate)};
  font-weight: 600;
  font-size: 14px;
  vertical-align: center;
  position: ${props => props.posIn ? '' : 'absolute'};
  right: 10px;
  top: 10px;
`

export default Metacritic;