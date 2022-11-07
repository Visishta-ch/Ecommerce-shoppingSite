import React from 'react';
import Tours from './Home/Tours';
import Hnav from './Home/Hnav';
import Foot from './Foot'
import './Home.css';
const Home = () => {
  return (
    <>
      <Hnav />
      <Tours />
      <Foot/>
    </>
  );
};

export default Home;
