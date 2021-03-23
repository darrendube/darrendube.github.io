import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ThemeChanger from "./themeChanger"
import { graphql } from "gatsby"





const LogoWrap = styled.div`

  margin: auto 0;
  flex: 0 1 36px;
 
  @media (max-width= 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }



  




`

const Logo = () => {
  return (
    <LogoWrap className="logo-link" as={Link} to="/">
      {/*<img src="/logo/logo.png" className="logoimg"/>*/}
      <p className="logo-text"> DARREN&nbsp;<span className="dube">DUBE</span></p>
      
    </LogoWrap>
    
  )
}

export default Logo