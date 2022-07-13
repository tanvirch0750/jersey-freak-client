import React from 'react';
import Announcement from '../../components/announcement/Announcement';
import Navbar from '../../components/navigation/Navbar';
import Slider from '../../components/slider/Slider';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
    </>
  );
};

export default Home;
