import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navigation/Navbar';
import { userRequest } from '../../requestMethods';
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
const KEY = process.env.REACT_APP_STRIPE;

console.log(KEY);

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: (cart.total + 10 - 5.9) * 100,
        });
        navigate('/success', {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

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
              <StripeCheckout
                name="Jersey Freak"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total + 10 - 5.9}`}
                amount={(cart.total + 10 - 5.9) * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <Button>CHECKOUT NOW</Button>
              </StripeCheckout>
            </Summary>
          </CartBottom>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
