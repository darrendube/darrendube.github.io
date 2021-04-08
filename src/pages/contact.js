import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { FaInstagram , FaTwitter , FaYoutube , FaRegEnvelope} from "react-icons/fa"


const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact - {site.siteMetadata.title}</title>
        <meta name="description" content="Get in touch with any questions, suggestions, or feedback you may have. I typically answer within 24 hours." />

        <meta property="og:title" content={"Contact - "+ site.siteMetadata.title}/>
        <meta property="og:description" content="Get in touch with any questions, suggestions, or feedback you may have. I typically answer within 24 hours."/>
        
        <meta property="og:url" content="https://darrendube.com/contact"/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@darrendube" />
        <meta name="twitter:creator" content="@darrendube" />
        <meta property="og:image" content={"https://darrendube.com/assets/icon.png"}/>

      </Helmet>

      <div className="two-grids">
        
        <div className="contact-page-text">
          <h1 className="contact-heading">Get in Touch</h1>
          <p className="contact-text">Feel free to ask any questions or give feedback &rarr;</p>
          
          <div className="footer-icons-row">
<a href="https://instagram.com/darrenzdube" target="_blank"><FaInstagram className="contact-page-icon"/></a>
<a href="https://twitter.com/darrendube" target="_blank"><FaTwitter className="contact-page-icon"/></a>
<a href="https://www.youtube.com/channel/UCUuowwJOmQzQfH_ub-qNxiA" target="_blank"><FaYoutube className="contact-page-icon"/></a>
</div>
        </div>

        <div>
          <form name="Contact Form" className="form-container" method="POST" data-netlify="true" >
<input type="hidden" name="form-name" value="Contact Form" />
            <div>
              <label htmlFor="w3lName">Name</label>
              <input type="text" name="Name" id="w3lName"/>
            </div>
            <div>
              <label htmlFor="w3lSender">Email<span className="required">*</span></label>
              <input type="email" name="Email" id="w3lSender" required/>
            </div>
            <div>
              <label htmlFor="w3lSubject">Subject</label>
              <input type="text" name="Subject" id="w3lSubject"/>
            </div>
            <div>
              <label htmlFor="w3lMessage">Message<span className="required">*</span></label>
              <textarea name="Message" id="w3lMessage" required></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="hero-button"/>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
