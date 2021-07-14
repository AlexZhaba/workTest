import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 30px;
  position: relative;
  @media(max-width: 1600px) {
    grid-template-columns: 1fr  1fr 1fr;
  }
  @media(max-width: 1100px) {
    grid-template-columns: 1fr  1fr;
  }
  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3px;
  padding-top: 100px;
  background: rgba(42, 40, 44, 0.8);
  position: absolute;
  display: flex;
  visibility: ${props => props.loading ? 'visible' : 'hidden'};
  opacity: ${props => props.loading ? '1' : '0'};
  transition: .1s all;
  z-index: 2;
  justify-content: center;
`;