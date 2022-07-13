import React from 'react';
import Announcement from '../../components/announcement/Announcement';
import Categories from '../../components/categories/Categories';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navigation/Navbar';
import Products from '../../components/products/Products';
import Slider from '../../components/slider/Slider';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
