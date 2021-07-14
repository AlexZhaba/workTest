import styled from 'styled-components';

export const CompanyName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 125px;
  
  @media(max-width: 650px) {
    margin: 0;
    margin-top: 10px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  
  @media(max-width: 650px) {
    flex-direction: column;
    height: 90px;
  }
`;

