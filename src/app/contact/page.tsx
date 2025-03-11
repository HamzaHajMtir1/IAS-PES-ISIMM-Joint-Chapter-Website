"use client";
import {ContactUs} from '@/components/Contact/ContactUs';
import { Footer } from '@/components/Footer';
import  Navbar  from '@/components/Navbar';
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default ContactPage;