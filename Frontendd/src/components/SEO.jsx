import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO component for managing page metadata
 * @param {string} title - Page title
 * @param {string} description - Page meta description
 * @param {string} ogImage - Open Graph image URL (optional)
 * @param {string} url - Page URL (optional, auto-detected)
 */
const SEO = ({ title, description, ogImage = '/Mvpblocks.webp', url = '' }) => {
  const baseUrl = 'http://localhost:5173'; // Update to production URL when deployed
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl + window.location.pathname;
  const appName = 'eventone';

  return (
    <Helmet>
      <title>{title} | {appName}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={appName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional metadata */}
      <meta name="application-name" content={appName} />
      <meta name="apple-mobile-web-app-title" content={appName} />
    </Helmet>
  );
};

export default SEO;
