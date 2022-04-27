import React from "react";

import { chakra, Link, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaExternalLink } from "react-icons/fa";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";

export default function CustomLink({ children, href }) {
  const color = useColorModeValue("black !important","white !important")
  const fw = useColorModeValue("inherit","bold")
  const background = useColorModeValue("linear-gradient(0deg, rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #a7ffebaa 10%, #a7ffebaa 41%, rgba(255,0,255,0) 41%)","linear-gradient(0deg, rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #a7ffeb77 10%, #a7ffeb77 41%, rgba(255,0,255,0) 41%)")
  if (
    href.startsWith("/") ||
    href.startsWith("https://neocapitalist.darrendube.com") ||
    href.startsWith("neocapitalist.darrendube.com")
  ) {
    // Use Gatsby's Link component for internal site navigation
    // to benefi t from the preloading features
    // See: https://www.gatsbyjs.org/docs/gatsby-link/
    return (
      <chakra.a
        //_hover={{ color: "inherit", textDecorationThickness:"0.2rem", textDecorationColor: "#ff3853" }}
      //  boxDecorationBreak="clone"
        
        href={href}
       // textDecoration="underline"
        //textDecorationThickness="0.17rem"
        textDecorationColor="blue.300"
      //  style={{textUnderlinePosition: "under"}}
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
      
      textDecoration="underline"
      //textDecorationThickness="0.17rem"
      textDecorationColor="#000088"
      style={{textUnderlinePosition: "under"}}
      href={href}
      // Open the link in a new page
      target={onPage ? null : "_blank"}
      // Add noopener and noreferrer for security reasons
      rel={onPage ? null : "noopener noreferrer"}
      _hover={{ color: "inherit", textDecorationThickness:"0.2rem", textDecorationColor: "#00009a" }}
    >
      {children}
    </chakra.a>
  );
}
