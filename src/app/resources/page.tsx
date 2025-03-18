"use client";
import { Footer } from '@/components/Footer';
import  Navbar  from '@/components/Navbar';
import { Resources } from '@/components/Ressouces/Resources';
import { ResourcesHero } from '@/components/Ressouces/ResourcesHero';
import React from 'react';

const ResourcesPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <ResourcesHero />
            <Resources  />
            <Footer />
        </div>
    );
};

export default ResourcesPage;