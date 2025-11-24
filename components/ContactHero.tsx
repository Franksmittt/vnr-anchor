'use client';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const ContactHero = () => {
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className="bg-surface-light border-b border-slate-200">
            <div className="container mx-auto px-6 py-16 sm:py-24 text-center"> {/* EDITED PADDING */}
                <Breadcrumbs items={breadcrumbItems} className="flex justify-center text-slate-500" />
                <h1 className="mt-4 font-serif text-4xl md:text-5xl font-extrabold text-text-primary">Get in Touch</h1>
                <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                    We are here to help you navigate your financial journey. Whether you have a question about our services or want to schedule a consultation, we look forward to hearing from you.
                </p>
            </div>
        </div>
    );
};

export default ContactHero;