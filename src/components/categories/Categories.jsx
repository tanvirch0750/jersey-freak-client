import React from 'react';
import { categories } from '../../data';
import CategoryItem from '../categoryItem/CategoryItem';
import { Container } from './Categories.styled';

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
