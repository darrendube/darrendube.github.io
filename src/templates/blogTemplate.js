import React from "react"
import Helmet from 'react-helmet';
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SubscribeSection from "../components/subscribe-section"
import { FaCalendar, FaClock } from "react-icons/fa"
import ShareButtons from "../components/share"




export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html, fields } = markdownRemark



  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={markdownRemark.excerpt} />

      </Helmet>


      <div className="blog-post-container">
    
        <article className="post">

          <div className="post-header ">
            <div className="header-wrapper post-grid">
              {!!frontmatter.thumbnail && (
                <div className="post-thumbnail grid-item1" style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}>
                </div>
              )}

              <div className="post-info grid-item2">
                <div className="type-category">
                  <div className="post-type"> {frontmatter.type} </div>
                  <Link to={"/blog/" + frontmatter.category.replace(" ", "-")}><div className="category"> {frontmatter.category} </div></Link>
                </div>
                <h2 className="post-title blue-grey-heading">{frontmatter.title}</h2>




                {!!frontmatter.intro && (
                  <div className="post-intro"> {frontmatter.intro}
                  </div>
                )}
                <div className="post-meta">

                  <FaCalendar />
            &nbsp;&nbsp;{frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;
            <FaClock />
            &nbsp;&nbsp;{Math.round(fields.readingTime.minutes)} minute read
            </div>
                <div className="post-meta"><ShareButtons path={"https://darrendube.com" + frontmatter.path} title={frontmatter.title} /></div>
              </div>
            </div>
          </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <SubscribeSection />
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
      excerpt(pruneLength: 200)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        category
        type
        intro
        
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`
