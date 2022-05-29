import React, { Component } from "react";
import { ButtonLink } from "../buttonLink";
import {
  ButtonWapper,
  Heding,
  Img,
  ImgCol,
  ImgWapper,
  InfoCol,
  InfoContiner,
  InfoRow,
  InfoWapper,
  SubParagraph,
  TextWapper,
  TopLine,
} from "./infoElement";

function InfoElment(props) {
  return (
    <>
    {/* id baray react scroll hast  */}
      <InfoContiner id={props.id} dark={!props.light}>
        <InfoWapper>
{/* age dark bashe aval axse bad info */}
          <InfoRow imgStart = {props.light}>
            <TextWapper>
              <InfoCol>
                <TopLine>{props.topLine}</TopLine>
                <Heding> {props.hedding} </Heding>
                <SubParagraph>
                  {props.discription}
                </SubParagraph>
                <ButtonWapper>
                  <ButtonLink to="home" pr={props.pr}>
                    Get Start
                  </ButtonLink>
                </ButtonWapper>
              </InfoCol>
              
            </TextWapper>
            <ImgCol>
                <ImgWapper>
                    <Img src={props.img} / >                
                </ImgWapper>
              </ImgCol>
          </InfoRow>
        </InfoWapper>
      </InfoContiner>
    </>
  );
}

export default InfoElment;
