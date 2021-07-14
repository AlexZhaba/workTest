import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;  
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 0 100px;

  @media(max-width: 1100px) {
    padding: 0 50px;
  }
  @media(max-width: 900px) {
    padding: 0 100px;
  }
  @media(max-width: 700px) {
    padding: 0 20px;
  }
  @media(max-width: 500px) {
    padding: 0 0px;
  }
`;