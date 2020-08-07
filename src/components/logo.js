import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ThemeChanger from "./themeChanger"



const LogoWrap = styled.div`

  margin: auto 0;
  flex: 0 1 36px;
  padding: auto auto;
  @media (max-width= 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }

  color: black;


  :hover {
    text-decoration: none;
  }


`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <h1 class="logo-text no-select"> Darren<span class="logo-text-2">Blog</span><span class="logo-text-3">.</span> </h1>
      
    </LogoWrap>
    
  )
}

export default Logo