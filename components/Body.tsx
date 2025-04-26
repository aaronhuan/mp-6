'use client'
import { userAgent } from "next/server";
import styled from "styled-components";
import Header from "./Header";

const PageWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: lightblue;
  padding:.5vw;
  height:100vh;
  `;

  const MainBox = styled.div`
  background:lightgrey;
  padding:2px;
  width:50%;
  height:50%;
  border-radius:10px;
  display: flex;
  gap:2px;
  justify-content:center;
  align-items:center;
  flex-direction:column;`

export default function Body({user}:{user:{login:string;}}){
    return(
        <>
        <Header/>
        <PageWrapper>
            <MainBox>
                <h3>Welcome, {user.login}</h3>
            </MainBox>
        </PageWrapper>
        </>
    )
}