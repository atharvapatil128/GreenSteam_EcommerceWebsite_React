import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``

const Title = styled.h1`
margin: 26px`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 26px;
${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`

const FilterText = styled.span`
margin-right: 20px;
font-size: 20px;
font-weight: 600;
${mobile({marginRight: "0px"})}
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: "10px 0px"})}
`
const Option = styled.option`
`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
  
    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>All Products</Title>
        <FilterContainer>
            <Filter><FilterText>Filter based on:</FilterText>
                    <Select name="filter1" onChange={handleFilters}>
                        <Option>
                            Products
                        </Option>
                        <Option disabled>
                            Shops
                        </Option>
                    </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option disabled selected>
                            Select
                        </Option>
                        <Option value="newest">
                            New Arrivals
                        </Option>
                        <Option value="asc">
                            Price Low to High
                        </Option>
                        <Option value="desc">
                            Price High to Low
                        </Option>
                        
                    </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter/>
        <Footer/>
    </Container>
  )
};

export default ProductList;