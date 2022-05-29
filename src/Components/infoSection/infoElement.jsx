import styled from "styled-components";

export const InfoContiner = styled.div`
  background-color: ${({ dark }) => (dark ? "#010606" : "#f9f9f9")};
  padding: 0 24px;

  color: ${({ dark }) => (dark ? "#f9f9f9" : "#010606")};
  @media screen and (max-width: 608px) {
    padding: 100px 0;
  }
`;
export const InfoWapper = styled.div`
  display: grid;
  height: 860px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  /* ye ja axs aval gharar dare ye ja info  */
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'imgs info'` : `'info imgs'`)};
  @media screen and (max-width: 608px) {
    grid-template-areas:
      " imgs"
      " info";
  }
`;

export const TextWapper = styled.div`
  max-width: 500px;
  padding: 0;
  padding-bottom: 60px;
`;

export const InfoCol = styled.div`
  grid-area: info;
  margin-bottom: 15px;
  padding: 0 15px;
`;
export const TopLine = styled.p`
  color: #fab209 !important;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Heding = styled.h2`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  @media screen and (max-width: 608px) {
    font-size: 32px;
  }
`;
export const SubParagraph = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
`;
export const ButtonWapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgCol = styled.div`
  grid-area: imgs   ;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const ImgWapper = styled.div`

    max-width: 555px;
    height: 100%;


`;
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
