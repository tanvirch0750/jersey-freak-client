import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navigation/Navbar';
import { addProduct } from '../../redux/cartRedux';
import { publicRequest } from '../../requestMethods';
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Description,
  Filter,
  FilterContainer,
  FilterJersey,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from './Product.styled';

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [jerseType, setJerseType] = useState('');
  const [jerseySize, setJerseySize] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, jerseType, jerseySize }));
  };

  const { title, desc, img, price, jerseyType, size } = product;
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src={img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{title}</Title>
            <Description>{desc}</Description>
            <Price>$ {price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Jersey Type</FilterTitle>
                {jerseyType?.map((type) => (
                  <FilterJersey
                    key={type}
                    jersey={type}
                    onClick={() => setJerseType(type)}
                  >
                    {type}
                  </FilterJersey>
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setJerseySize(e.target.value)}>
                  {size?.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove
                  onClick={() => handleQuantity('dec')}
                  style={{ cursor: 'pointer' }}
                />
                <Amount>{quantity}</Amount>
                <Add
                  onClick={() => handleQuantity('inc')}
                  style={{ cursor: 'pointer' }}
                />
              </AmountContainer>
              <Button onClick={handleClick}>Add To Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
