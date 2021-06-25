import React from 'react';

import { chakra, Link, ExternalLinkIcon } from '@chakra-ui/react';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';

export default function CustomLink({ children, href }) {
  if (href.startsWith('/')) {
    // Use Gatsby's Link component for internal site navigation
    // to benefit from the preloading features
    // See: https://www.gatsbyjs.org/docs/gatsby-link/
    return <Link to={href}>{children}</Link>;
  }
  // Check if the link is for a section on the page
  // We don't want to add the attributes for the on page links
  const onPage = href.startsWith('#');
  return (
    <Link
      href={href}
      // Open the link in a new page
      target={onPage ? null : '_blank'}
      // Add noopener and noreferrer for security reasons
      rel={onPage ? null : 'noopener noreferrer'}
      
    >
      {children} <ExternalLinkIcon mx="2px" />
    </Link>
  );
}

