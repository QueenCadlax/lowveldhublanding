import React, { useEffect } from 'react';
import { generateLocalBusinessSchema, generateOrganizationSchema } from '../lib/schema';

interface SchemaScriptProps {
  schema: Record<string, any>;
  type?: 'ld+json' | 'application/json';
}

export const SchemaScript: React.FC<SchemaScriptProps> = ({ schema, type = 'ld+json' }) => {
  useEffect(() => {
    // Create and inject script tag for schema
    const script = document.createElement('script');
    script.type = `application/${type}`;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [schema]);

  return null;
};

export const SEOSchemaManager: React.FC = () => {
  return (
    <>
      <SchemaScript schema={generateOrganizationSchema()} />
      <SchemaScript schema={generateLocalBusinessSchema()} />
    </>
  );
};

export default SEOSchemaManager;
