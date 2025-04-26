'use client'
import styled from 'styled-components'
import Link from 'next/link';
const StyledTitle = styled.h1`
    font-size:1.3vw+2px;
    margin:0;
`; 
const StyledTitleWrapper= styled.div`
    display:flex;
    background-color:white;
    justify-content: center;
    align-items: center`

export default function Header(){
    return(
        <StyledTitleWrapper>
         <Link href='/' style={{color: 'black', textDecoration: 'none'}}><StyledTitle>CS391 OAuth</StyledTitle></Link>
        </StyledTitleWrapper>
       
    );
}