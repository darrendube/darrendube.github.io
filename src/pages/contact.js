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
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="contact-heading">Get in Touch</h1>
          <p className="contact-text">Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form className="form-container" netlify>
<input type="hidden" name="form-name" value="contact" />
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
              <input type="submit" className="contact-button -primary"/>
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
