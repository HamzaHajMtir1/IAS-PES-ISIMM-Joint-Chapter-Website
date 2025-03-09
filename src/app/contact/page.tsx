
import { ContactComponent } from '@/components/Contact/ContactComponent';
import { Footer } from '@/components/Footer';
import  Navbar  from '@/components/Navbar';
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <ContactComponent />
            <Footer />
        </div>
    );
};

export default ContactPage;