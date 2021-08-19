import React from "react";

import { chakra, Link, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaExternalLink } from "react-icons/fa";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";

export default function CustomLink({ children, href }) {
  const color = useColorModeValue("black !important","white !important")
  const fw = useColorModeValue("inherit","bold")
  const background = useColorModeValue("linear-gradient(0deg, rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #a6374e55 10%, #a6374e55 41%, rgba(255,0,255,0) 41%)","linear-gradient(0deg, rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #a6374e99 10%, #a6374e99 41%, rgba(255,0,255,0) 41%)")
  if (
    href.startsWith("/") ||
    href.startsWith("https://neocapitalist.darrendube.com") ||
    href.startsWith("neocapitalist.darrendube.com")
  ) {
    // Use Gatsby's Link component for internal site navigation
    // to benefit from the preloading features
    // See: https://www.gatsbyjs.org/docs/gatsby-link/
    return (
      <chakra.a
        _hover={{  background: "linear-gradient(0deg, rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #a6374e 10%, #a6374e 41%, rgba(255,0,255,0) 41%)",
        textDecoration: "none",
        color: "inherit"  }}
        boxDecorationBreak="clone"
        background="linear-gradient(0deg, rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #a6374e55 10%, #a6374e55 41%, rgba(255,0,255,0) 41%)"
        href={href}
      >
        {children}
      </chakra.a>
    );
  }
  // Check if the link is for a section on the page
  // We don't want to add the attributes for the on page links
  const onPage = href.startsWith("#");
  
  return (
    <chakra.a
      boxDecorationBreak="clone"
      background={background}
      href={href}
      // Open the link in a new page
      target={onPage ? null : "_blank"}
      // Add noopener and noreferrer for security reasons
      rel={onPage ? null : "noopener noreferrer"}
      _hover={{
     
        background: "linear-gradient(0deg, rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #a6374e 10%, #a6374e 41%, rgba(255,0,255,0) 41%)",
        textDecoration: "none",
        color: "inherit"
      }}
    >
      {children}
    </chakra.a>
  );
}
