import React from 'react'
import { FooterItem, HeaderItem, ItemLink } from './Elements'

const FooterLink = () => {
    return (
        <FooterItem>
            <HeaderItem>Aboute us</HeaderItem>
            <ItemLink to=''>Home</ItemLink>
            <ItemLink to='courses'>Courses</ItemLink>
            <ItemLink to='Blog' >Blog</ItemLink>
            <ItemLink to='roadme' > Road Me</ItemLink>
        </FooterItem>
    )
}

export default FooterLink