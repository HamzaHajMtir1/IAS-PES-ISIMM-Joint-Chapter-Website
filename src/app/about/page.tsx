
import {HeaderAbout} from '@/components/About/HeaderAbout';
import { Footer } from '@/components/Footer';
import  Navbar  from '@/components/Navbar';
import React from 'react';
import { OurJointChapter } from '@/components/About/OurJointChapter';

const AboutPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeaderAbout />
            <OurJointChapter />
            <Footer />
        </div>
    );
};

export default AboutPage;