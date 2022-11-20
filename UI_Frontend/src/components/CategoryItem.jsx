
import { Link } from "react-router-dom";
import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
opacity:0.95;
${mobile({height: "30vh"})}
`

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
color:white;
margin-bottom: 20px;
`

const Button = styled.button`
border-color:#1A6837;
padding: 10px;
background-color: white;
color:#1A6837;
font-weight:650;
cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>Explore</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem