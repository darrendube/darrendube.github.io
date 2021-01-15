import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import Logo from "./logo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faFacebook, } from "@fortawesome/free-solid-svg-icons"
import SubscribeForm from "./subscribe-form"



export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div><header className="">
        <Navbar />
      </header>
      <div className="site-wrapper">
      
      {children}
      </div>
      <footer className="site-footer">

        <div className="footer-section1">
          <Logo/>

          
     <SubscribeForm />
<FontAwesomeIcon icon={faInstagram} />


        </div>
        
        <div className="footer-section2">
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Contact</h4>
        </div>

        <div className="footer-section3">
          <h4>Podcast</h4>
          <h4>Youtube</h4>
          <h4>Privacy Policy</h4>
        </div>


      </footer>
    </div>
  )
}
