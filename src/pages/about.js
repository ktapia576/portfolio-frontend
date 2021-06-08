import * as React from 'react';
import { Link } from 'gatsby';

function AboutPage(){
    return (
        <main>
            <title>About</title>
            <h1>About Us</h1>
            <Link to="/">Home Page</Link>
            <p>This is to test the about page for the website.</p>
        </main>
    );
}

export default AboutPage; 