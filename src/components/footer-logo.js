import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"




const FooterLogo = () => {
  return (
    <Link to="/"><p className="logo-text-footer"> DARREN&nbsp;<span className="dube2">DUBE</span></p></Link>
      
   
  )
}

export default FooterLogo