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
                    We're here to help. Whether you have a quick question or want to plan a full consultation, we'd love to hear from you. No pressure, just a friendly conversation about how we can help.
                </p>
                <p className="mt-4 text-base font-semibold text-brand-blue max-w-2xl mx-auto">
                    📍 Head Office: Centurion | 🌍 Serving clients across South Africa
                </p>
            </div>
        </div>
    );
};

export default ContactHero;