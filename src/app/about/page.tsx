
import {HeaderAbout} from '@/components/About/HeaderAbout';
import { Footer } from '@/components/Footer';
import  Navbar  from '@/components/Navbar';
import React from 'react';
import { OurJointChapter } from '@/components/About/OurJointChapter';
import OurMainGoal from '@/components/About/OurMainGoal';

const AboutPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeaderAbout />
            <OurJointChapter />
            <OurMainGoal />
            <Footer />
        </div>
    );
};

export default AboutPage;