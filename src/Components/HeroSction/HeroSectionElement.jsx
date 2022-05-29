import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 400px;
  ::before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    background-color: #00000052;
  }
`;
// background cover
export const BgCover = styled.div`
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000;
`;
//  tag video
export const Video = styled.video`
  object-fit: cover;
  -o-object-fit: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const TitleAndBio = styled.div`
  max-width: 1200;
  z-index: 3;
  position: absolute;
`;
//  title
export const Title = styled.h2`
  max-width: 1200;
  z-index: 3;
  color: #fff;
  font-size: 25px;
  transition: all 0.3s ease;
  @media screen and (max-width: 780px) {
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 15px;
  } ;
`;
// Paragraph for section
export const Paragraph = styled.p`
  max-width: 1200px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-size: 20px;
`;
// parent Btn
export const HeroBtnWarrp = styled.div`
  margin-top: 30px;
  text-align: center;
`;
// when hover is false
export const ArrowRight = styled(MdKeyboardArrowRight)`
  vertical-align: middle;
  font-size: 18px;
`;
// when  hover is true
export const ArrowForward = styled(MdArrowForward)`
  vertical-align: middle;
  font-size: 18px;
`;
// export const ArrowRight = styled()`

// `
