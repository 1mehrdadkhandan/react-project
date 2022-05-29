import React, { useState } from "react";
import { HeroSection } from "../Components/HeroSction";
import InfoElment from "../Components/infoSection";
import { homeDataObj, homeDataObj2, homeDataObjblog, homeDataObjRoadMap } from "../Components/infoSection/Data";
import Services from "../Components/services";

function Home() {

  return (
    <div>

      <HeroSection />
      <InfoElment {...homeDataObj} />
      <InfoElment {...homeDataObj2} />
      <InfoElment {...homeDataObjblog} />
      <InfoElment {...homeDataObjRoadMap} />
      <Services />
    </div>
  );
}

export default Home;
