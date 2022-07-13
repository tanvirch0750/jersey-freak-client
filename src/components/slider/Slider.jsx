import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { sliderItems } from '../../data';
import {
  Arrow,
  Button,
  Container,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from './Slider.styled';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slideItem) => (
          <Slide key={slideItem.id} bg={slideItem.bg}>
            <ImageContainer>
              <Image src={slideItem.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{slideItem.title}</Title>
              <Description>{slideItem.description}</Description>
              <Button>Shop now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
