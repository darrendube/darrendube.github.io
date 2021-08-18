import React from 'react';

import { chakra, Link } from '@chakra-ui/react';
import { ExternalLinkIcon  } from '@chakra-ui/icons';
import { FaExternalLink } from 'react-icons/fa';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';

export default function CustomLink({ children, href }) {
  if (href.startsWith('/') || href.startsWith('https://neocapitalist.darrendube.com') || href.startsWith('neocapitalist.darrendube.com')) {
    // Use Gatsby's Link component for internal site navigation
    // to benefit from the preloading features
    // See: https://www.gatsbyjs.org/docs/gatsby-link/
    return <Link  _hover={{ color: 'blue.400' }}
    textDecoration="underline"
      textDecorationColor="blue200"
      textDecorationThickness="3px"
    
    href={href}>{children}</Link>;
  }
  // Check if the link is for a section on the page
  // We don't want to add the attributes for the on page links
  const onPage = href.startsWith('#');
  return (
    <Link
      textDecoration="underline"
      textDecorationColor="blue.200"
      textDecorationThickness="3px"

      href={href}
      // Open the link in a new page
      target={onPage ? null : '_blank'}
      // Add noopener and noreferrer for security reasons
      rel={onPage ? null : 'noopener noreferrer'}
       _hover={{ color: 'blue.400' }}
    >
      {children}{onPage ? null : <ExternalLinkIcon  h="0.8rem"/>}
    </Link>
  );
}

