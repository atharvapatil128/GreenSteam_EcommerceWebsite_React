import styled from "styled-components"
import React from 'react'

const Container = styled.div`
    height: 30px;
    background-color: #81B175;
    color: white; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>Order Now! Free Shipping on Orders above ₹499</Container>
  )
}

export default Announcement