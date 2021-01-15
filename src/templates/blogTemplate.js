import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SubscribeSection from "../components/subscribe-section"

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
          
          <div className="post-header post-grid">

          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail grid-item1" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
            </div>
          )}

          <div className="post-info grid-item2">
          <div className="category"> {frontmatter.category} </div>
          <h2 className="post-title blue-grey-heading">{frontmatter.title}</h2>

          

          <div className="post-meta">{frontmatter.date}</div>

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
        
      }
    }
  }
`
