import React from 'react';
import { generateOrganizationSchema } from '@/lib/seo';

const Schema = () => {
  const schemaData = generateOrganizationSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/</g, '\\u003c') }}
    />
  );
};

export default Schema;