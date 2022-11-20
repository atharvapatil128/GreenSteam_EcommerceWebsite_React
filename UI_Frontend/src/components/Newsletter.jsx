import { Send } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
height: 60vh;
background-color: #F7FFF7;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px; 
`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({textAlign: "center"})}
`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: none;
${mobile({width: "80%"})}
`

const Input = styled.input`
border: 1px solid lgray;
flex: 8;
padding-left: 20px;
`

const Button = styled.button`
flex: 1;
border: none;
background-color: #1A6837;
color: white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>All delivered to your inbox: ethical products, artisan stories, and strategies for increasing your impact!</Description>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter