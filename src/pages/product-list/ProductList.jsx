import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navigation/Navbar';
import Products from '../../components/products/Products';
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title,
} from './ProductList.styled';

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Title>{category}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select name="club" onChange={handleFilters}>
              <Option disabled>Club Name</Option>
              <Option>All</Option>
              <Option>Real Madrid</Option>
              <Option>Barcelona</Option>
              <Option>Manchester United</Option>
              <Option>Chelsea</Option>
              <Option>Liverpool</Option>
              <Option>Juventus</Option>
              <Option>PSG</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Jersey Size</Option>
              <Option>ALL</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value={'newest'}>Newest</Option>
              <Option value={'asc'}>Price (Lowest)</Option>
              <Option value={'desc'}>Price (Highsest)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products category={category} filter={filter} sort={sort} />
      <Footer />
    </>
  );
};

export default ProductList;
