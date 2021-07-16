import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <Footer />
    </>
  );
}

export default IndexPage;