import React from 'react'
import { FooterElem, Copyright, FooterCol, FooterLinks, FooterSocial, FooterWapper, Logo, Media, SocialMedia, SocialWapper } from './Elements'
import FooterLink from './FooterLink'

import { BsInstagram, BsWhatsapp, BsTelegram, BsYoutube } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <FooterElem>

                <FooterWapper>
                    {/* bakhsh link ha */}
                    <FooterLinks>
                        {/* Wapper */}
                        {/* har 2 ta column 1 Footer col */}
                        {/* 1 */}
                        <FooterCol>
                            <FooterLink />
                            <FooterLink />
                        </FooterCol>

                        {/* 2 */}
                        <FooterCol>
                            <FooterLink />
                            <FooterLink />
                        </FooterCol>

                    </FooterLinks>

                    <FooterSocial>
                        <SocialWapper>
                            <Logo>Mehrdad Khandan</Logo>
                            <Copyright>Mehrdad khandan Copy right 2022</Copyright>
                            <SocialMedia>
                                <Media> <BsYoutube />ّ </Media>
                                <Media> <BsInstagram /> </Media>
                                <Media> <BsTelegram /> </Media>
                                <Media>  <BsWhatsapp /> </Media>
                            </SocialMedia>
                        </SocialWapper>
                    </FooterSocial>

                </FooterWapper>
            </FooterElem>
        </>
    )
}

export default Footer