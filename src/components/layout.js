import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import Logo from "./logo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faFacebook, } from "@fortawesome/free-solid-svg-icons"

const SectionSubmit = styled.div`
  margin: 20px 29px 0 20px;
  
`

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

          
     <SectionSubmit>
   <form
  action="https://buttondown.email/api/emails/embed-subscribe/darrendube"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/darrendube', 'popupwindow')"
  class="embeddable-buttondown-form subscribe-form"
>
        
          <input type="email" className="text-box" name="email" placeholder="Email" required></input>
          <input type="hidden" value="1" name="embed"></input>
          <input type="submit" className="hero-button" value=" SUBSCRIBE &rarr;"></input>
        
        </form>
     </SectionSubmit>
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
