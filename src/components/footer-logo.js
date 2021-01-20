import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"




const FooterLogo = () => {
  return (
    
     <Link to="/"> <img src="/logo/logo.png" className="logoimg"/></Link>
      
   
  )
}

export default FooterLogo