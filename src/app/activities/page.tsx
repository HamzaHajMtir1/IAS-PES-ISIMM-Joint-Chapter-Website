
import { ActivitiesListComponent } from '@/components/Activities/ActivitiesListComponent';
import { Footer } from '@/components/Footer';
import  Navbar  from '@/components/Navbar';
import React from 'react';

const ActivitiesPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <ActivitiesListComponent />
            <Footer />
        </div>
    );
};

export default ActivitiesPage;