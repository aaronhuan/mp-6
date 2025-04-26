'use client'
import styled from 'styled-components'

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
         <a href='/' style={{color: 'black', textDecoration: 'none'}}><StyledTitle>CS391 OAuth</StyledTitle></a>
        </StyledTitleWrapper>
       
    );
}