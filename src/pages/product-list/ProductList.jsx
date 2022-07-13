import React from 'react';
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
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Title>Jerseys</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select>
              <Option disabled selected>
                Club Name
              </Option>
              <Option>Real Madrid</Option>
              <Option>Barcelona</Option>
              <Option>Manchester United</Option>
              <Option>Chelsea</Option>
              <Option>Liverpool</Option>
              <Option>Juventus</Option>
              <Option>PSG</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Jersey Size
              </Option>
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
            <Select>
              <Option selected>2022/2023 Season</Option>
              <Option>Price (Lowest)</Option>
              <Option>Price (Highsest)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products />
      <Footer />
    </>
  );
};

export default ProductList;
