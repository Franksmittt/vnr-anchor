import React from 'react';

const Schema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "VNR Professional Accountants",
    "image": "https://www.vnr.co.za/logo.png", // Use absolute URL
    "@id": "https://www.vnr.co.za", // Use absolute URL
    "url": "https://www.vnr.co.za", // Use absolute URL
    "telephone": "+27 12 653 1633",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1022 Saxby Avenue",
      "addressLocality": "Centurion",
      "addressRegion": "Gauteng",
      "postalCode": "0157",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.8617, // Approximate latitude for the address
      "longitude": 28.1725  // Approximate longitude for the address
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "16:30"
    },
    "sameAs": [
      // Add links to social media profiles here when they are created
      // "https://www.linkedin.com/company/vnr-professional-accountants"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default Schema;