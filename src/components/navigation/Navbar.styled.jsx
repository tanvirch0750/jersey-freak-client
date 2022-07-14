import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  height: 90px;

  ${mobile({
    height: '60px',
  })}
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({})}
`;

export const LanguageAndSearch = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({
    display: 'none',
  })}
`;

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({
    marginLeft: '0px',
  })}
`;

export const Input = styled.input`
  border: none;

  ${mobile({
    width: '50px',
  })}
`;

export const Logobox = styled.div`
  flex: 1;
`;

export const Logo = styled.h1`
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #f45d48;

  ${mobile({
    fontSize: '16px',
  })}
`;

export const Navigation = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({
    flex: 2,
    // justifyContent: 'center',
  })}
`;

export const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({
    fontSize: '12px',
    marginLeft: '10px',
  })}
`;
