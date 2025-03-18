'use client';
import { ActivitiesListComponent } from '@/components/Activities/ActivitiesListComponent';
import { Footer } from '@/components/Footer';
import  Navbar  from '@/components/Navbar';
import { UpcomingEvents } from "@/components/Activities/UpcomingEvents";
import React from 'react';

const ActivitiesPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <ActivitiesListComponent />
            <UpcomingEvents />
            <Footer />
        </div>
    );
};

export default ActivitiesPage;