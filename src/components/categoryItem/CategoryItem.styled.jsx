import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  margin: 3px;
  flex: 1;
  height: 70vh;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h2`
  // color: #fff;
  font-size: 32px;
  margin-bottom: 20px;

  ${mobile({
    fontSize: '20px',
  })}
`;
export const Button = styled.button`
  font-size: 16px;
  color: #fffffe;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid transparent;
  cursor: pointer;
  position: relative;
  background-color: #078080;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :after {
    content: '';
    background-color: #f45d48;
    width: 100%;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
    z-index: -1;
  }

  :hover:after {
    top: 0px;
    left: 0px;
  }

  ${mobile({
    fontSize: '14px',
    padding: '8px 10px',
  })}

  @media (min-width: 768px) {
    padding: 13px 50px 13px;
  }
`;
