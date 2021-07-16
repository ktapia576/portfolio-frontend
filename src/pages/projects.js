import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

function ProjectsPage(){
    return (
        <>
            <Navbar />
            <p className="hero has-background-black-ter is-fullheight-with-navbar has-text-grey-lighter">This is projects page</p>
            <Footer />
        </>
    );
}

export default ProjectsPage; 