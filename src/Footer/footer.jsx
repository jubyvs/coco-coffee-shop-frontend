import React from 'react';
import * as Bootstrap from 'react-bootstrap';

import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';


const Footer = () => {
    return(
        <Bootstrap.Container className="footer" fluid>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </Bootstrap.Container>
    );
}

export default Footer;