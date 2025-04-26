'use client'
import Header from "@/components/Header";
import styled from "styled-components";

const PageWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: lightblue;
  padding:.5vw;
  height:100vh;
  `;

const StyledButton= styled.button`
  background:lavender;
  width:80%;
  border-radius:10px;
  height:40px;
  `
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
export default function Home() {
  const Login = () => {
    //https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#loading-environment-variables
    // need to prefix NEXT_PUBLIC for it to be accessable in client side 

    const clientid = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    // const clientid = process.env.CLIENT_ID; <- returns undefined b/c can't access it 

    const redirectURI = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI;
    // const redirectURI = process.env.REDIRECT_URI;

    const githubRequestURL =`https://github.com/login/oauth/authorize?scope=read:user&client_id=${clientid}&redirect_uri=${redirectURI}`
    window.location.href = githubRequestURL; // actually redirects  
    //https://www.w3schools.com/js/js_window_location.asp
  }
    return (
      <main>
      <Header/>
      <PageWrapper>
    
      
      <MainBox>
        <h3>Login to GitHub</h3>
      <StyledButton onClick={Login}>GitHub</StyledButton>
      </MainBox>
      
    
      </PageWrapper>
      </main>
    
  );
}
