import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import{Link as al } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const SideBarConriner = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top :${({isOpen})=>(isOpen ?'0' :'-100%' )};
  opacity: ${({isOpen})=>(isOpen ?'1' :'0' )}  ; 
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  background: #000;

`;

export const Icon = styled.div`
  direction: rtl;
  position: absolute;
  display: flex;
  align-items: center;
  right : 1.5rem;
  cursor: pointer;
  top: 1.2rem;

`;
export const IconX = styled(FaTimes)`
color: #fff;
`
export const SideBarWapper =styled.div`
display: flex;
justify-content: center;
height: 60%;
align-items: center;

`

export const SideBarMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items:center;

height: 65%;



`

export const SideBarLocition = styled(LinkS)`
text-decoration: none;
text-align: center;
color: #fff;
transition: 0.2s ease;
cursor: pointer;
&:hover{
  color: #fab209;
}
`

export const SideNavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;


`

export const SideNavBtnLink = styled(al)`
  background-color:#fab209;
  border-radius: 50px;
  white-space: nowrap;
   padding: 10px 22px;
   text-decoration: none;
   color: #fff;
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
