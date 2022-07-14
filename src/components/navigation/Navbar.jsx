import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
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
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
