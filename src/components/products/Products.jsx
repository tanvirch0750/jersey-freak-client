import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from '../product/Product';
import { Container } from './Products.styled';

const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filter]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filterdProducts?.map((product) => (
            <Product key={product._id} product={product} />
          ))
        : products
            ?.slice(0, 8)
            ?.map((product) => <Product key={product._id} product={product} />)}
    </Container>
  );
};

export default Products;
