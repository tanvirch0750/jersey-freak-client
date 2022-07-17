import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
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
  const cart = useSelector((state) => state.cart);
  console.log(cart);
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
              <TopText>Shopping Bag ({cart.quantity})</TopText>
              <TopText>Your Favourite (0)</TopText>
            </TopTexts>
            <TopButton type="checkout">Checkout Now</TopButton>
          </CartTop>
          <CartBottom>
            <Info>
              {cart.products?.map((product) => (
                <>
                  <Product>
                    <ProductDetail>
                      <Image src={product?.img} />
                      <Details>
                        <ProductName>
                          <b>Product Name:</b> {product?.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product?._id}
                        </ProductId>
                        <ProductType>
                          <b>Type:</b> <span>{product?.jerseType}</span>
                        </ProductType>
                        <ProductSize>
                          <b>Size:</b> {product?.jerseySize}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add />
                        <ProductAmount>{product?.quantity}</ProductAmount>
                        <Remove />
                      </ProductAmountContainer>
                      <ProductPrice>$ {product?.price}</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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
                <SummaryItemPrice>$ {cart.total + 10 - 5.9}</SummaryItemPrice>
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
