import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import Logo from "./logo"
import styled from "styled-components"

import SubscribeForm from "./subscribe-form"
import SubscribeFormFooter from "./subscribe-form-footer"
import FooterLogo from "./footer-logo"
import { FaInstagram , FaTwitter , FaYoutube} from "react-icons/fa"
import ThemeChanger from "./themeChanger"



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
      <div className="footer-items-wrapper items-wrapper">
        <div className="footer-section1">
          <FooterLogo/>

          
     
     <div className="footer-icons-row">
<a href="https://instagram.com/darrenzdube" target="_blank"><FaInstagram className="footer-icon"/></a>
<a href="https://twitter.com/darrendube" target="_blank"><FaTwitter className="footer-icon"/></a>
<a href="https://facebook.com/darrenzdube" target="_blank"><FaYoutube className="footer-icon"/></a>
</div>
        </div>
         <div className="footer-section2">
         <div>
          <p><Link to="/blog/blockchain">BLOCKCHAIN</Link></p>
          <p><Link to="/">WEB DEVELOPMENT</Link></p>
          </div>
          <div>
          <p><Link to="/">MACHINE LEARNING</Link></p>
          
          </div>
        </div>

        <div className="footer-section3">
          <p className="footer-heading">PAGES</p>
          <p><Link to="/">Home</Link></p>
          <p><Link to="404">About</Link></p>
          <p><Link to="contact">Contact</Link></p>
        </div>

       

        <div className="footer-section4">
          <p className="footer-heading">BONUS</p>
          <p><Link to="/">Podcast</Link></p>
          <p><Link to="/">Youtube</Link></p>
          <p><Link to="/">Privacy Policy</Link></p>
        </div>

        
</div>
      </footer>
      <div className="copyright-notice">
          <p className=""> Copyright &copy; 2021 <Link to="/">Darren Dube</Link> &bull; All Rights Reserved | <a href="https://www.darrendube.com/sitemap.xml" target="_blank">Sitemap</a></p>
        </div>
    </div>
  )
}
