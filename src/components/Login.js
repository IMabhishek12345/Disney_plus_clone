import React from 'react'
import styled from "styled-components";

const Container=styled.section`
  overflow: hidden;
  display: flex ;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  `;

const Content=styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction:column;
  padding: 80px 40px;
  height:100%;
`;

const BgImg=styled.div`
height:100%;
background-position: top;
background-size:cover;
background-image: url("./images/login-background.jpg");
position: absolute;
z-index:-1;
top:0;
left:0;
right:0;

`
const CTA=styled.div`
margin-bottom: 2vw; 
max-width:650px;
display:flex;
flex-wrap: wrap;
flex-direction:column;
justify-content:center;
margin-top:0;
align-items:center;
margin-right:auto;
margin-left:auto;
transition-timing-function:ease-out;
transition: opacity 0.2s;
width:100%;
`
const CTALogoOne=styled.img`
margin-bottom:12px;
max-width: 600px;
min-height:1px;
display:block;
width:100%;

`
const SignUp=styled.a`
 font-weight:bold;
 color: #f9f9f9;
 background-color: #0063e5;
 margin-bottom: 12px;
 width:100%;
 letter-spacing: 1.5px;
 font-size:18px;
 padding: 16.5px 0;
 border: 1px solid transparent;
 border-radius:4px;
  &:hover{
    background-color:#0483ee;
  }
`
const Description=styled.p`
 color: lightgray;
 font-size: 11px;
 margin: 0 0 24px;
 line-height: 1.5;
 letter-spacing: 1.5px;
`;

const CTALogoTwo=styled.img`
  max-width:600px;
  margin-bottom:20px;
  display: inline-block;
  vertical-align:bottom;
  width:100%; 
`;
// https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/2560px-Disney%2B_Hotstar_logo.svg.png
const Login = (props) => {
  return (
    <Container>
     <Content>
     <CTA>
      <CTALogoOne src="./images/cta-logo-one.svg"/>
       <SignUp> Get it all there</SignUp>
       <Description>
       Get full  unlimited access to all the entertainment at your finger tip
       You need to just sign it up and choose the membership plans which is starting 
       from 199 only 
      </Description>
      <CTALogoTwo src="./images/cta-logo-two.png" /> 
     </CTA>
     <BgImg />
     </Content>
    </Container>
  )
}

export default Login
