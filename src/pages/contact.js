import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids">
        <div className="contact-page-text">
          <h1 className="contact-heading">Get in Touch</h1>
          <p className="contact-text">Feel free to ask any questions or give feedback &rarr;</p>
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
