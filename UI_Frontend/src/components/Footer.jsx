import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room } from '@material-ui/icons';
import styled from "styled-components"
import React from 'react'
import { mobile } from '../responsive';

const Container =  styled.div`
display: flex;
background-color: #1A6837;
${mobile({flexDirection: "column"})}
`
const Left =  styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
padding-left: 30px;
`
const Logo = styled.h1`
color:#E7EDE9`
const Description = styled.p`
color: #E7EDE9;
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center =  styled.div`
flex: 1;
padding: 20px;
padding-left: 30px;
${mobile({display: "none"})}
`
const Title = styled.h3`
color: white;
margin-bottom: 30px;
`

const List = styled.ul`
color: #E7EDE9;
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
color: #E7EDE9  ;   
width: 50%;`

const Right =  styled.div`
flex: 1;
padding: 20px;

`

const ContactItem = styled.div`
color: #E7EDE9;
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 50%;
`


const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>© 2022, Green Steam</Logo>
        <Description>At Green Steam, we want you to put your trust in us as a marketplace and community. Striving to be a one-stop-shop for fashion forward, ethical, and sustainable goods, we vet all of our brands so you don’t have to.</Description>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon >
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Home Decor</ListItem>
            <ListItem>Personal Care</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Wishlist</ListItem>
        </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>Kothrud, Pune 411038</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+91 7070707056</ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@greensteam.in</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
    </Right>
    </Container>
  )
}

export default Footer