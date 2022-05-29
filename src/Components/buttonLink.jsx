import styled from 'styled-components'
import {Link} from 'react-scroll'
export const ButtonLink = styled(Link)`

  cursor: pointer;
  outline: 0;
  border: 0;
  padding: ${({big})=>(big ? '12px 30px': '8px 16px')};
  background-color: ${({pr})=>(pr ? '#fab209':'#010606')} ;
  color: ${({pr})=>(pr ? '#010606':'#fff')}
  ;
  border-radius: 3px;
  transition: 0.3s ease;
  &:hover{
    background-color: ${({pr})=>(pr ? '#fff':'#fab209')} ;

    color: ${({pr})=>(pr ? '#fab209':'#010606')}

  }
  
`
