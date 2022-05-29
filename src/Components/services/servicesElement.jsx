import styled from "styled-components";

export const ServicesContiner = styled.div`
  height: 860px;
  box-sizing: border-box;
  background-color: #010606;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 50px;
  @media screen and (max-width:750px) {
      height:1100px;
      padding: 0 20px;
  }
`;

export const ServivesTitlte = styled.h3`
  font-size: 50px;
  color:  #f9f9f9;
  max-width: 900px;
  text-align: center;

  @media screen and (max-width: 750px) {
    font-size: 28px;
  }
`;
export const ServicesWapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  gap: 10px;
  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  border-radius: 10px;
  justify-content: center;
  background-color: #f9f9f9;
  max-height: 340px;
  transition    :all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition    :all 0.3s ease-in-out;
  }
`;
export const ImgWapper = styled.div`
  height: 160px;
  width: 160px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconServices = styled.img`
  width: 100%;
`;

export const ServicesTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
`;
export const ServicesBody = styled.p`
  font-weight: 400;
  font-size: 16px;
`;
