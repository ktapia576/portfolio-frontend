import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function ProjectsPage(){
    return (
        <>
            <Navbar />
            <Projects />
            <Footer />
        </>
    );
}

export default ProjectsPage; 