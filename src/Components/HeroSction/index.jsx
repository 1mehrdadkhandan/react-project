import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  BgCover,
  Container,
  HeroBtnWarrp,
  Paragraph,
  Title,
  TitleAndBio,
  Video,
} from "./HeroSectionElement";

import Videos from "../../videos/pexels-ehab-el-gapry-6238188.mp4";
import { ButtonLink } from "../buttonLink";
export const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const changeHover = () => {
    console.log("changed");
    setHover(!hover);
  };
  return (
    <Container>
      <BgCover>
        <Video autoPlay src={Videos} muted loop type="video/mp4" />
      </BgCover>
      <TitleAndBio>
        <Title>Welcome To web Site mehrdad</Title>
        <Paragraph>js is nice</Paragraph>
        <HeroBtnWarrp>
          \{/* big va  pr varay rang va size button hast  */}
          <ButtonLink
            to="/"
            big
            pr
            onMouseEnter={changeHover}
            onMouseLeave={changeHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonLink>
        </HeroBtnWarrp>
      </TitleAndBio>
    </Container>
  );
};
