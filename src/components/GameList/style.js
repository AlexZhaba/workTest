import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 30px;

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