import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default IndexPage;