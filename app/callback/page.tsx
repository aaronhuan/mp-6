'use server';
import Header from "@/components/Header";
import Body from "@/components/Body";
//example: http://localhost:3000/callback?code=cbf8645529a6c079822f
//want to extract the code = ....
//https://nextjs.org/docs/app/api-reference/functions/use-search-params <- to read the params in the search

type SearchParams = Promise<{code: string}>

// type CallbackProps= searchParams: Promise<{code?:string}>

//https://nextjs.org/docs/app/guides/upgrading/version-15#params--searchparams <-async page
export default async function Callback({searchParams}: {searchParams: SearchParams}){
  const {code} = await searchParams;
  //will need to obtain an access token via POST request ->  Client ID, Client Secret, and the code
  if (!code){
    return <p>Error no code param found.</p>
  }

  const res = await fetch( // https://stackoverflow.com/questions/66739797/how-to-handle-a-post-request-in-next-js
    'https://github.com/login/oauth/access_token', // https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
        redirect_uri : process.env.REDIRECT_URI
      }),
    }
  )
  const data = await res.json()
  const accessToken = data.access_token
  if (!accessToken){
    return <p>Error no access token found</p>
  }

  //use token to ake a request
  /* ost GitHub REST API endpoints specify that you should pass an
   Accept header with a value of application/vnd.github+json*/
  const userres = await fetch('https://api.github.com/user',{
    method: 'GET',
    headers:{
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/vnd.github+json', 
    }
  }
  )
  const userdata = await userres.json()
  if (!userdata.login){
    return <p> couldn't get github user</p>
  } 

  return(
    <>
    <Body user={userdata}/>
    </>
  );
}
