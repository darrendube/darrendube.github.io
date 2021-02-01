import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SubscribeSection from "../components/subscribe-section"
import { FaCalendar , FaClock} from "react-icons/fa"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html } = markdownRemark
  
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />

      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          <div className="post-header ">
          <div className="header-wrapper post-grid">
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail grid-item1" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
            </div>
          )}

          <div className="post-info grid-item2">
<div className="type-category">
          <div className="post-type"> {frontmatter.type} </div>
          <div className="category"> {frontmatter.category} </div>
</div>
          <h2 className="post-title blue-grey-heading">{frontmatter.title}</h2>

          

          
          {!!frontmatter.intro && (
            <div className="post-intro"> {frontmatter.intro}
            </div>
          )}
          <div className="post-meta"><FaCalendar />&nbsp;&nbsp;{frontmatter.date}</div>
          <div className="post-meta"><FaClock />&nbsp;&nbsp;2 minute read</div>

          </div>
          </div>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <SubscribeSection/>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        category
        type
        intro
        
      }
    }
  }
`
