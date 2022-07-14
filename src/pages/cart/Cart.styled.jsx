import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;

  ${mobile({
    padding: '10px',
  })}
`;

export const Title = styled.h1`
  margin-top: 20px;
  margin-left: 10px;
  font-weight: 300;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  color: #078080;
`;

export const CartTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopTexts = styled.div`
  display: flex;
  gap: 10px;

  ${mobile({
    display: 'none',
  })}
`;
export const TopText = styled.span`
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
`;

export const TopButton = styled.button`
  font-size: 16px;
  color: #fffffe;
  text-transform: uppercase;
  font-weight: 200;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid transparent;
  cursor: pointer;
  position: relative;
  background-color: ${(props) =>
    props.type === 'checkout' ? '#f45d48' : '#078080'};
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  ${mobile({
    fontSize: '14px',
    padding: '8px 10px 8px',
    textTransform: 'capitalize',
  })}

  @media (min-width: 768px) {
    padding: 13px 30px 13px;
  }
`;

export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 30px;
  margin-top: 50px;

  ${mobile({
    flexDirection: 'column',
  })}
`;
export const Info = styled.div`
  flex: 3;

  ${mobile({
    flex: '1',
  })}
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: 'column',
  })}
`;

export const ProductDetail = styled.div`
  flex: 2;

  display: flex;
`;

export const Image = styled.img`
  width: 200px;

  ${mobile({
    width: '150px',
  })}
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${mobile({
    gap: '10px',
  })}
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductType = styled.div`
  span {
    padding: 5px 10px;
    background-color: #f45d48;
    color: #fff;
    border-radius: 10px;
  }
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  ${mobile({
    margin: '5px 15px',
  })}
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  ${mobile({
    marginBottom: '20px',
  })}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;

  ${mobile({
    marginBottom: '40px',
  })}
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
`;

export const SummaryTitle = styled.h1`
  margin: 0;
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
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

  @media (min-width: 768px) {
    padding: 13px 30px 13px;
  }
`;
