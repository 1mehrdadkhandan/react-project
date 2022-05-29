import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import {
  Nav,
  Logo,
  NavBarCotinior,
  NavMenu,
  NavItem,
  NavLink,
  MonileIcon,
  NavBtn,
  NavBtnLink,
  SpanLink,
} from "./ElementNav";

const NavBar = ({ setIsOpens }) => {

  const [scroll, setscroll] = useState(false);


useEffect(() => {

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 80)
      setscroll(true)
    else
      setscroll(false)

  })
}, [] );

  return (
    <>
      <Nav scroll={scroll}>
        <NavBarCotinior>
          <Logo to="/"> Mehrdad </Logo>
          <MonileIcon onClick={setIsOpens}  >
            {" "}
            <BiMenu fontSize="30px" color="#fff" stroke="#fff" />
          </MonileIcon>
          <NavMenu>
            <NavItem>
              <NavLink offset={-80}  smooth={true} to=''><SpanLink>Home</SpanLink></NavLink>
            </NavItem>
            <NavItem>
              <NavLink offset={-80} smooth={true} spy={true} to='courses'><SpanLink>Courses</SpanLink></NavLink>
            </NavItem>
            <NavItem>
              <NavLink offset={-80} smooth={true} spy={true} to='aboute'><SpanLink>abute</SpanLink></NavLink>
            </NavItem>
            <NavItem>
              <NavLink offset={-80}  smooth={true} spy={true} to='blog'><SpanLink>Blog</SpanLink></NavLink>
            </NavItem>
            <NavItem >
              <NavLink offset={-80}  smooth={true} spy={true} to='readMap'><SpanLink>read map</SpanLink></NavLink>
            </NavItem>
          </NavMenu>  
          <NavBtn>
            <NavBtnLink smooth={true} spy={true} to='/signin'> <SpanLink >signin</SpanLink> </NavBtnLink>
          </NavBtn>
        </NavBarCotinior>
      </Nav>
    </>
  );
};

export default NavBar;
