import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import logoimg from "../../images/logo.png"
import { Box, Stack, StackDivider, Image } from '@chakra-ui/react'







const LogoWrap = styled.div`

  margin: auto 0;
  flex: 0 1 36px;
 
  @media (max-width= 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }



  




`

export const Logo = () => {
  return (
    
      <Image src={logoimg} className="logoimg"/>
      
    
  )
}

