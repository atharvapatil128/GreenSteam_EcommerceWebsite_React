
import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
width: 100%;
height: 100vh;
background: url("https://i.ibb.co/pXc3V6y/Signup-Login-Backdrop.png");
background-size: cover;
display: flex;
align-items: center;
justify-content: center;    
`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({width: "75%"})}
`
const Title = styled.h1`
display: flex;
align-items: center;
justify-content: center;  
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;  
padding: 10px;
`

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`

const Button = styled.button`
flex: auto; 
align-items: center; 
border: none;
padding: 15px 20px;
background-color: #1A6837;
color: white;
cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password" type="password"/>
                <Input placeholder="Confirm password" type="password"/>
                <Agreement>
                    By clicking here, I state that I have read and understood the <b>Terms</b> and <b>Conditions</b>.
                </Agreement>
                
            </Form><Button>Create</Button>
        </Wrapper>
    </Container>
  )
}

export default Register;