import { Add, Remove } from '@material-ui/icons';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navigation/Navbar';
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
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src="https://i.ibb.co/jhv04jx/H23544-MUFC-FW22-HOME-KIT-ALEX-TELLES-093-s-RGB1657202650557-medium.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Manchester United Home</Title>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              aperiam architecto ipsum maiores assumenda sapiente enim illum
              mollitia facilis expedita. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Possimus sequi mollitia exercitationem deserunt
              assumenda voluptatem.
            </Description>
            <Price>$ 100</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Jersey Options</FilterTitle>
                <FilterJersey jersey="home">Home</FilterJersey>
                <FilterJersey jersey="away">Away</FilterJersey>
                <FilterJersey jersey="third">Third</FilterJersey>
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                  <FilterSizeOption>XXL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>Add To Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
