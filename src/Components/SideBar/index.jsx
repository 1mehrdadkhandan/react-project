import React from "react";

import {
  Icon,
  SideBarConriner,
  IconX,
  SideBarLocition,
  SideBarMenu,
  SideBarWapper,
  SideNavBtn,
  SideNavBtnLink
} from "./SideBarElements";

const SideBar = ({ isOpen, setIsOpens }) => {
  return (
    <SideBarConriner onClick={setIsOpens} isOpen={isOpen}>
      <Icon>
        <IconX />
      </Icon>
      <SideBarWapper>
        <SideBarMenu>
          <SideBarLocition smooth={true} spy={true} onClick={setIsOpens} to="/">Home</SideBarLocition>

          <SideBarLocition smooth={true} spy={true} onClick={setIsOpens} to="/Coures">Coures</SideBarLocition>

          <SideBarLocition smooth={true} spy={true} onClick={setIsOpens} to="/Blog">Blog</SideBarLocition>

          <SideBarLocition smooth={true} spy={true} onClick={setIsOpens} to="/roadmap">road map</SideBarLocition>
        </SideBarMenu>
      </SideBarWapper>
      <SideNavBtn>
        <SideNavBtnLink to="/singin"> singin </SideNavBtnLink>
      </SideNavBtn>
    </SideBarConriner>
  );
};

export default SideBar;
