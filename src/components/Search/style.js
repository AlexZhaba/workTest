import styled from 'styled-components';

export const SearchContainer = styled.input`
  outline: none;
  background: ${props => props.theme.DARK_BCG_COLOR};
  border: none;
  padding: 5px 30px;
  color: #FFF;
  margin-left: 50px;
  height: 38px;
  font-size: 14px;
  width: 240px;
  border-radius: 30px;
  transition: .2s all;

  :focus {
    width: 300px;
    transition: .2s all;
    box-shadow: 0px 0px 0px 2px ${props => props.theme.ORANGE_COLOR};
  }
  
  :hover {
    box-shadow: 0px 0px 0px 2px ${props => props.theme.ORANGE_COLOR};
  }

  @media(max-width: 650px) {
    margin: 0;
    margin-top: 10px;
    width: calc(100% - 60px);

    :focus {
      width: calc(100% - 60px);
    }
  }
`;