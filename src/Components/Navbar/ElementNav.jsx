import styled from "styled-components";
import { Link as al } from "react-router-dom";
import { Link as LinkS } from 'react-scroll'
import Link from "react-scroll/modules/components/Link";
export const Nav = styled.nav`
height : 80px;
display: flex;
align-items : center;
font-size : 1rem;
position : sticky;
margin-top: -80px;
top:0;
background:  ${({ scroll }) => (scroll ? '#000' : 'trasparent')};
justify-content: center;
z-index: 10;
width:100% ;
`;

export const NavBarCotinior = styled.div`
  display: flex;
  justify-content: space-between;

  height: 80px;
  width: 100%;
  max-width: 900px;
`;

export const Logo = styled(al)`
  color: #fff;
  justify-self: flex-start;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const MonileIcon = styled.div`
display: none;

@media screen and (max-width: 608px) {
    display: block;
    color : #fff;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    transform: translate(-80%,60%);

}

`
export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    justify-content: center;
    margin: 0;
  @media screen and (max-width:608px) {
      display: none;
  }

`
export const NavItem = styled.li`
display: flex;
align-items: center;
cursor: pointer;
height: 80px;
justify-content: center;
text-align: center;
list-style: none;
flex-direction: column;
box-sizing: border-box;

`
export const NavLink = styled(LinkS)`
text-decoration: none;
color:#fff;
display: flex;
flex-direction: column;
justify-content: center;

height: 90%;
align-items: center;
padding: 0 1.5rem;
&::after{
  width: 0%;
  display: block;
  height: 1px;
  transition: all 0.3s ease;
  content: '';


}

&:hover::after , &.active::after{
  background-color:  #fab209;
  width: 100%;
}
&.active {
 

 
}
`
export const SpanLink = styled.span`
  padding-bottom:10px;
`



export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 608px) {
    display: none;
  }

`

export const NavBtnLink = styled(al)`
  background-color:#fab209;
  border-radius: 50px;
  white-space: nowrap;
   padding: 10px 22px;
   text-decoration: none;
   color: #010606;
   font-size: 16px;
   outline: 0;
   border: 0;
   cursor: pointer;
   line-height: 1;
   transition: all 0.3s ease-in-out;
  
   &:hover{
    transition: all 0.3s ease-in-out;

    color: #000;
    background-color:#fff ;

   }
`