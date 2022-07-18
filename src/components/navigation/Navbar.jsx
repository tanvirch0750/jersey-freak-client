import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Input,
  Language,
  LanguageAndSearch,
  Logo,
  Logobox,
  MenuItem,
  Navigation,
  SearchContainer,
  Wrapper,
} from './Navbar.styled';

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <Container>
      <Wrapper>
        <LanguageAndSearch>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" type="text"></Input>
            <Search style={{ color: 'gray', fontSize: '16px' }}></Search>
          </SearchContainer>
        </LanguageAndSearch>
        <Logobox>
          <Logo>Jersey Freak</Logo>
        </Logobox>
        <Navigation>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
