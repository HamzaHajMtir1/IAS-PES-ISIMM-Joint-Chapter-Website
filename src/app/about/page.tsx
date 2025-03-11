"use client";
import {HeaderAbout} from '@/components/About/HeaderAbout';
import { Footer } from '@/components/Footer';
import  Navbar  from '@/components/Navbar';
import React from 'react';
import { OurJointChapter } from '@/components/About/OurJointChapter';
import OurMainGoal from '@/components/About/OurMainGoal';
import { ChapterLeadership } from "@/components/About/ChapterLeadership"

const AboutPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeaderAbout />
            <OurJointChapter />
            <OurMainGoal />
            <ChapterLeadership />
            <Footer />
        </div>
    );
};

export default AboutPage;