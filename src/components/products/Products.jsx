import { popularProducts } from '../../data';
import Product from '../product/Product';
import { Container } from './Products.styled';

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;
