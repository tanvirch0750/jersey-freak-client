import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navigation/Navbar';
import {
  Button,
  CartBottom,
  CartTop,
  Container,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  ProductType,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
} from './Cart.styled';

const Cart = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <Title>Your Products</Title>
          <CartTop>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
              <TopText>Shopping Bag (2)</TopText>
              <TopText>Your Favourite (0)</TopText>
            </TopTexts>
            <TopButton type="checkout">Checkout Now</TopButton>
          </CartTop>
          <CartBottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://i.ibb.co/F6SFswR/jersey.jpg" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Real Madrid
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 3245678
                    </ProductId>
                    <ProductType>
                      <b>Type:</b> <span>Away</span>
                    </ProductType>
                    <ProductSize>
                      <b>Size:</b> XL
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 100</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://i.ibb.co/F6SFswR/jersey.jpg" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Real Madrid
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 3245678
                    </ProductId>
                    <ProductType>
                      <b>Type:</b> <span>Away</span>
                    </ProductType>
                    <ProductSize>
                      <b>Size:</b> XL
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 100</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 200</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shopping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 200</SummaryItemPrice>
              </SummaryItem>
              <Button>Checkout Now</Button>
            </Summary>
          </CartBottom>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
