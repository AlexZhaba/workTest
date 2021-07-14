import styled from "styled-components";
import {Text} from "@shared";

export const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  @media(max-width: 1300px) {
    flex-direction: column;
  }
`;

export const Slider = styled.div`
  width: 100%;
  display: flex;
`;

export const SliderWrapper = styled.div`
   flex: 5;
  overflow-x: scroll;
  min-height: 300px;
  @media(max-width: 1300px) {
    width: 100%;
    order: 1;
  }
  @media(max-width: 700px) {
    min-height: 250px;
  }
`;

export const Info = styled.div`
  flex: 3;
  margin-right: 20px;

  @media(max-width: 1300px) {
    order: 2;
  }
`;

export const TestImg = styled.div`
  height: 400px;
  background: url('${props => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  flex-shrink: 0;
  transition: .2s all;
  @media(max-width: 700px) {
    height: 250px;
  }
  :hover {
  }
`;

export const HeadLine = styled(Text)`
  padding-bottom: 3px;
  border-bottom: 4px solid ${props => props.theme.ORANGE_COLOR};
`;
export const Description = styled.div`
  margin-top: 5px;
  font-size: 16px;
`;

export const Background = styled.img`
  z-index: -5;
  position: absolute;
  top: -250px;
  left: 0;
  width: 100%;
  @media(max-width: 1300px) {
    display: none;
  }
`;

export const BackgroundShadow = styled.div`
  z-index: -4;
  position: absolute;
  top: 200px;
  left: 0;
  bottom: 0;
  width: 100%;
  /* height: 400px; */
  background: linear-gradient(0deg, rgba(29, 27, 31, 1) 75%, rgba(29, 27, 31, 0) 100%);
`;

export const Wrapper = styled.div`
  min-height: calc(100vh - 150px);
  position: relative;
  padding-bottom: 50px;
  /* height: 100%; */
  @media(max-width: 1300px) {
    min-height: calc(100vh - 70px)
  }
`;

export const ContentPadding = styled.div`
  width: 100%;
  padding: 0 125px;

  @media(max-width: 1100px) {
    padding: 0 50px;
  }
  @media(max-width: 700px) {
    padding: 0 20px;
  }
`;