import Link from "react-scroll/modules/components/Link"
import styled from "styled-components"



export const FooterElem = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #101522;   
`
// links
export const FooterWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;

`
export const FooterLinks = styled.div`

    
    display: grid;
    width: 80%;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 850px) {
    grid-template-columns:1fr;
        
    }    
`

export const FooterCol = styled.div`
    display: grid;
    color: #f9f9f9;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 500px) {
    grid-template-columns:1fr;
    }
`

export const FooterItem = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: column;
`
export const HeaderItem = styled.h4`
    font-size: 18px;
    font-weight: bold;
`
export const ItemLink = styled(Link)`
    font-size: 16px;
    color: #ccc;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover {
        color: #f9f9f9;
    }

    
`
// social media 
export const FooterSocial = styled.div`
    width    :100% ;
    padding: 40px 10px ;

`
export const SocialWapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    align-items: center;
    @media screen and (max-width:500px) {
        grid-template-columns: 1fr;
    
    };
`
export const Logo = styled.h2`
    font-size: 30px;
    color: #f9f9f9;
    text-align: center;
    font-weight: 700;
    white-space: 2px;
`
export const Copyright = styled.p`
    font-size: 16px;
    text-align: center;

    color: #ccc;

`
export const SocialMedia = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    text-align: center;
    padding-top: 10px;
    `
export const Media = styled.span`
    font-size:16px;
    color: #f9f9f9;

`