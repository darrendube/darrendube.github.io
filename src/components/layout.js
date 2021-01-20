import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import Logo from "./logo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faFacebook, } from "@fortawesome/free-solid-svg-icons"
import SubscribeForm from "./subscribe-form"
import SubscribeFormFooter from "./subscribe-form-footer"
import FooterLogo from "./footer-logo"



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
          <FooterLogo/>

          
     <SubscribeFormFooter/>
<FontAwesomeIcon icon={faInstagram} />


        </div>
         <div className="footer-section2">
         <div>
          <p><Link to="/">CRYPTOS</Link></p>
          <p><Link to="/">STOCKS</Link></p>
          </div>
          <div>
          <p><Link to="/">CURRENCIES</Link></p>
          <p><Link to="/">PERSONAL FINANCE</Link></p>
          </div>
        </div>

        <div className="footer-section3">
          <p><Link to="/">Home</Link></p>
          <p><Link to="404">About</Link></p>
          <p><Link to="contant">Contact</Link></p>
        </div>

       

        <div className="footer-section4">
          <p><Link to="/">Podcast</Link></p>
          <p><Link to="/">Youtube</Link></p>
          <p><Link to="/">Privacy Policy</Link></p>
        </div>

        

      </footer>
      <div className="copyright-notice">
          <p className="margin-auto"> Copyright &copy; 2021 <Link to="/">Darren Dube</Link> &bull; All Rights Reserved.</p>
        </div>
    </div>
  )
}
