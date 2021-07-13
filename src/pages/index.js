import * as React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar/Navbar';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default IndexPage;