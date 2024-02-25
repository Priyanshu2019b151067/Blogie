import {Box, Button, StyledEngineProvider, TextField,Typography} from '@mui/material'
import mainLogo from '../../images/mainLogoPhoto.png'
import styled from '@emotion/styled';

import { useState } from 'react';
const Component = styled(Box)`
  width : 60%;
  margin:auto;
  box-shadow : 4px 2px 4px 2px rgb(0 0 0/0.3)
`
const Image = styled('img')({
    width : '50%',
    display:'flex',
    margin: 'auto',
    paddingTop : '3rem'
});

const Wrapper = styled(Box)`
    padding : 8% 16%;
    display : flex;
    flex-direction :column;
    & > div,& > button,& > p {
        margin-top : 20px;
    }
`

const LoginButton = styled(Button)`
    width: 50%;
    margin: auto;
    color: white;
    background: black;
    &:hover {
        background: #00008B;
    }
`
const SignupButton = styled(Button)`
    width : 50%;
    margin : auto;
    box-shadow : 0 2px 4px 0 rgb(0 0 0/0.3)

`
const Ortext = styled(Typography)`
       color : #878787;
       font-size : 15px;
`
function Login(){
   const [islogin,setislogin] = useState(true);

   const changeLogin = () =>{
     setislogin(!islogin);
   }
//    const changesignup = () => {
//     setislogin(false);
//    }
   return(
        <Component>
            <Box>
                <Image src={mainLogo} ></Image>
                {
                    islogin ? <Wrapper>
                    <TextField variant='standard' label='User Name'/>
                    <TextField variant='standard' label='Password' />
                    <LoginButton variant='contained'>Login</LoginButton>
                    <Ortext textAlign={'center'} >OR</Ortext>
                    <SignupButton onClick={changeLogin}>Create an Account</SignupButton>
                </Wrapper> : 
                    <Wrapper>
                    <TextField variant='standard' label='Name '/>
                    <TextField variant='standard' label='UserName' />
                    <TextField variant='standard' label='Password' />
                    <SignupButton>Signup</SignupButton>
                    <Ortext textAlign={'center'} >OR</Ortext>
                    <LoginButton variant='contained' onClick={changeLogin}>Already have  account</LoginButton>
                </Wrapper>
                }
          </Box>
        </Component>
   )
}
export default Login;